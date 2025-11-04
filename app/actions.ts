"use server"

import { Resend } from 'resend'
import { z } from 'zod'
import { formSchema } from '@/lib/validations'

const resend = new Resend(process.env.RESEND_API_KEY)


async function sendAdminNotification(formData: {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  stalAddress: string
  timestamp: string
}) {
  const subject = `Nieuwe afspraakaanvraag - ${formData.firstName} ${formData.lastName}`

  const emailHtml = `
    <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; background-color: #F7FBF9;">
      <!-- Header -->
      <div style="background-color: #3C6D51; padding: 24px; color: white; border-radius: 8px 8px 0 0;">
        <div style="display: flex; align-items: center; gap: 16px;">
          <img src="https://eqdent.nl/eqdentlogo.png" alt="EQDent Logo" style="height: 40px; width: auto;" />
          <div>
            <div style="font-size: 20px; font-weight: bold;">EQDent</div>
            <div style="text-align: left; font-size: 14px; opacity: 0.9;">
              Professionele paardentandheelkunde
            </div>
          </div>
        </div>
      </div>
      
      <!-- Body -->
      <div style="padding: 32px; background-color: white; border: 1px solid #9FAEAA; border-top: none; border-radius: 0 0 8px 8px;">
        <h2 style="color: #3C6D51; margin-bottom: 24px; font-size: 24px; font-weight: 300;">Nieuwe afspraakaanvraag ontvangen</h2>
        
        <div style="background-color: #E8F3EC; border: 1px solid #4C8A65; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
          <div style="font-size: 15px; line-height: 1.6; color: #3C6D51;">
            <p style="margin: 8px 0;"><strong>Naam:</strong> ${formData.firstName} ${formData.lastName}</p>
            <p style="margin: 8px 0;"><strong>E-mail:</strong> ${formData.email}</p>
            <p style="margin: 8px 0;"><strong>Telefoon:</strong> ${formData.phone}</p>
            <p style="margin: 8px 0;"><strong>Adres:</strong> ${formData.address}</p>
            <p style="margin: 8px 0;"><strong>Staladres:</strong> ${formData.stalAddress}</p>
            <p style="margin: 8px 0;"><strong>Datum/tijd:</strong> ${formData.timestamp}</p>
          </div>
        </div>
        
        <div style="background-color: #F7FBF9; border: 1px solid #4C8A65; border-radius: 8px; padding: 20px;">
          <p style="color: #4C8A65; margin: 0; font-weight: 600;">
            ✓ Log in op het admin panel om de afspraak te bevestigen.
          </p>
        </div>
      </div>
      
      <!-- Footer -->
      <div style="background-color: #D8CBB2; padding: 16px; text-align: center; border-radius: 0 0 8px 8px;">
        <p style="font-size: 12px; color: #3C6D51; margin: 0;">
          EQDent - Professionele paardentandheelkunde | www.eqdent.nl
        </p>
      </div>
    </div>
  `

  return await resend.emails.send({
    from: 'EQDent Contact Form <noreply@eqdent.nl>',
    to: [process.env.ADMIN_EMAIL || 'contact@eqdent.nl'],
    subject,
    html: emailHtml,
    replyTo: formData.email
  })
}

async function sendClientConfirmation(formData: {
  firstName: string
  lastName: string
  email: string
}) {
  const emailHtml = `
    <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; background-color: #F7FBF9;">
      <!-- Header -->
      <div style="background-color: #3C6D51; padding: 24px; color: white; border-radius: 8px 8px 0 0;">
        <div style="display: flex; align-items: center; gap: 16px;">
          <img src="https://eqdent.nl/eqdentlogo.png" alt="EQDent Logo" style="height: 40px; width: auto;" />
          <div>
            <div style="font-size: 20px; font-weight: bold;">EQDent</div>
            <div style="text-align: left; font-size: 14px; opacity: 0.9;">
              Professionele paardentandheelkunde bij het paard thuis
            </div>
          </div>
        </div>
      </div>
      
      <!-- Body -->
      <div style="padding: 32px; background-color: white; border: 1px solid #9FAEAA; border-top: none; border-radius: 0 0 8px 8px;">
        <div style="margin-bottom: 24px;">
          <h1 style="color: #3C6D51; font-size: 24px; font-weight: 300; margin: 0 0 8px 0;">Bedankt voor uw afspraakaanvraag</h1>
          <p style="color: #9FAEAA; margin: 0;">Wij nemen binnen twee werkdagen contact met u op</p>
        </div>
        
        <div style="margin-bottom: 24px;">
          <p style="color: #3C6D51; margin: 0 0 16px 0;">Beste ${formData.firstName},</p>
          
          <p style="color: #3C6D51; line-height: 1.6; margin: 0 0 24px 0;">
            Hartelijk dank voor uw vertrouwen in EQDent. Wij hebben uw afspraakaanvraag 
            ontvangen en zullen binnen twee werkdagen telefonisch contact met u opnemen om een geschikte 
            tijd in te plannen voor de tandheelkundige zorg van uw paard op locatie.
          </p>
          
          <div style="background-color: #E8F3EC; border: 1px solid #4C8A65; border-radius: 8px; padding: 24px; margin-bottom: 24px;">
            <h3 style="color: #3C6D51; font-weight: 600; margin: 0 0 12px 0;">Wat kunt u verwachten:</h3>
            <ul style="margin: 0; padding-left: 0; list-style: none; color: #3C6D51;">
              <li style="display: flex; align-items: flex-start; gap: 12px; margin-bottom: 8px;">
                <span style="color: #4C8A65; margin-top: 2px;">✓</span>
                <span>Telefonisch contact binnen twee werkdagen</span>
              </li>
              <li style="display: flex; align-items: flex-start; gap: 12px; margin-bottom: 8px;">
                <span style="color: #4C8A65; margin-top: 2px;">✓</span>
                <span>Tandheelkundige zorg op uw locatie - binnen 30 minuten vanaf Wezep</span>
              </li>
              <li style="display: flex; align-items: flex-start; gap: 12px; margin-bottom: 8px;">
                <span style="color: #4C8A65; margin-top: 2px;">✓</span>
                <span>Dezelfde aandacht en precisie als in een klinische setting</span>
              </li>
              <li style="display: flex; align-items: flex-start; gap: 12px;">
                <span style="color: #4C8A65; margin-top: 2px;">✓</span>
                <span>15+ jaar ervaring in paardentandheelkunde</span>
              </li>
            </ul>
          </div>
          
          <div style="background-color: #F7FBF9; border: 1px solid #4C8A65; border-radius: 8px; padding: 24px; margin-bottom: 24px;">
            <h3 style="color: #4C8A65; font-weight: 600; margin: 0 0 8px 0;">Heeft u vragen?</h3>
            <p style="color: #4C8A65; margin: 0;">
              Voor vragen over uw afspraak kunt u contact opnemen via 
              <strong>contact@eqdent.nl</strong>
            </p>
          </div>
        </div>
        
        <div style="border-top: 1px solid #9FAEAA; padding-top: 24px;">
          <p style="color: #3C6D51; margin: 0 0 12px 0;">Met vriendelijke groet,</p>
          <div style="margin-top: 12px;">
            <p style="font-weight: 600; color: #3C6D51; margin: 0;">drs. Mark van Manen</p>
            <p style="color: #9FAEAA; margin: 0;">oprichter en tandheelkundig paardenarts - EQDent</p>
            <p style="color: #4C8A65; font-size: 14px; margin: 0;">www.eqdent.nl</p>
          </div>
        </div>
      </div>
      
      <!-- Footer -->
      <div style="background-color: #D8CBB2; padding: 16px; text-align: center; border-radius: 0 0 8px 8px;">
        <p style="font-size: 12px; color: #3C6D51; margin: 0;">
          Dit is een automatisch gegenereerd bericht. Voor vragen kunt u contact opnemen via onze website.
        </p>
      </div>
    </div>
  `

  return await resend.emails.send({
    from: 'EQDent <noreply@eqdent.nl>',
    to: [formData.email],
    subject: 'Bedankt voor uw afspraakaanvraag - EQDent',
    html: emailHtml
  })
}

export async function submitWaitlistForm(formData: FormData) {
  console.log("🔄 Form submission started")
  
  try {
    const rawData = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      address: formData.get("address"),
      stalAddress: formData.get("stalAddress"),
    }

    console.log("📋 Raw form data:", rawData)

    const validatedData = formSchema.parse(rawData)
    console.log("✅ Data validation successful:", validatedData)

    const timestamp = new Date().toLocaleString('nl-NL', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })

    const submissionData = {
      ...validatedData,
      timestamp
    }

    console.log("📧 Sending emails with data:", submissionData)

    // Send both emails in parallel
    const [adminResult, clientResult] = await Promise.allSettled([
      sendAdminNotification(submissionData),
      sendClientConfirmation({ 
        firstName: validatedData.firstName, 
        lastName: validatedData.lastName, 
        email: validatedData.email 
      })
    ])

    console.log("📬 Email results:", {
      admin: adminResult.status,
      adminDetails: adminResult.status === 'fulfilled' ? 'Success' : adminResult.reason,
      client: clientResult.status,
      clientDetails: clientResult.status === 'fulfilled' ? 'Success' : clientResult.reason
    })

    // Check if at least one email was sent successfully
    if (adminResult.status === 'rejected' && clientResult.status === 'rejected') {
      console.error("❌ Both emails failed to send")
      throw new Error("Er is een probleem opgetreden bij het versturen van de e-mails")
    }

    console.log("✅ Form submission successful!")
    return {
      success: true,
      message: `Bedankt ${validatedData.firstName}! Uw afspraakaanvraag is ontvangen. Wij nemen binnen twee werkdagen contact met u op om een afspraak in te plannen.`,
    }

  } catch (error) {
    console.error("❌ Form submission error:", error)
    
    if (error instanceof z.ZodError) {
      console.error("🔍 Validation errors:", error.issues)
      const fieldErrors = error.issues.map((err) => err.message).join(", ")
      return {
        success: false,
        message: fieldErrors,
      }
    }
    
    console.error("🚨 Unexpected error:", error)
    return {
      success: false,
      message: "Er is een fout opgetreden. Probeer het opnieuw of neem direct contact met ons op.",
    }
  }
}
