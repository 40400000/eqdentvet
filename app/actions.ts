"use server"

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

function calculateDistance(address: string): { isWithinArea: boolean; distance?: number } {
  // Simple heuristic based on postal code or city name
  // This is a basic implementation - in production, you'd use a proper geocoding API
  const lowerAddress = address.toLowerCase()
  
  // Cities/areas within 30 minutes of Wezep
  const nearbyAreas = [
    'wezep', 'zwolle', 'apeldoorn', 'deventer', 'kampen', 'oldebroek', 
    'hattem', 'elburg', 'nunspeet', 'harderwijk', 'ermelo', 'putten'
  ]
  
  const isNearby = nearbyAreas.some(area => lowerAddress.includes(area))
  
  // Check postal codes (rough approximation)
  const postalCodeMatch = address.match(/\d{4}/)?.[0]
  if (postalCodeMatch) {
    const code = parseInt(postalCodeMatch)
    // Postal codes around Wezep area (this is approximate)
    if ((code >= 8010 && code <= 8100) || (code >= 7300 && code <= 7400)) {
      return { isWithinArea: true }
    }
  }
  
  return { isWithinArea: isNearby }
}

async function sendAdminNotification(formData: {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  stalAddress: string
  timestamp: string
  isWithinArea: boolean
}) {
  const subject = formData.isWithinArea 
    ? `Nieuwe afspraakaanvraag - ${formData.firstName} ${formData.lastName}`
    : `⚠️ Afspraakaanvraag - Mogelijk buiten werkgebied - ${formData.firstName} ${formData.lastName}`

  const warningSection = formData.isWithinArea ? '' : `
    <div style="background-color: #fef3c7; border: 1px solid #f59e0b; border-radius: 8px; padding: 12px; margin-bottom: 16px;">
      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
        <span style="color: #d97706; font-weight: 600;">⚠️ Werkgebied waarschuwing</span>
      </div>
      <p style="color: #92400e; font-size: 14px; margin: 0;">Dit adres ligt mogelijk buiten ons werkgebied van 30 minuten vanaf Wezep.</p>
    </div>
  `

  const emailHtml = `
    <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1f2937; margin-bottom: 16px;">Nieuwe afspraakaanvraag ontvangen</h2>
      
      ${warningSection}
      
      <div style="background-color: #eff6ff; border: 1px solid #3b82f6; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
        <div style="font-size: 14px; line-height: 1.5;">
          <p style="margin: 4px 0;"><strong>Naam:</strong> ${formData.firstName} ${formData.lastName}</p>
          <p style="margin: 4px 0;"><strong>E-mail:</strong> ${formData.email}</p>
          <p style="margin: 4px 0;"><strong>Telefoon:</strong> ${formData.phone}</p>
          <p style="margin: 4px 0;"><strong>Adres:</strong> ${formData.address}</p>
          <p style="margin: 4px 0;"><strong>Staladres:</strong> ${formData.stalAddress}</p>
          <p style="margin: 4px 0;"><strong>Datum/tijd:</strong> ${formData.timestamp}</p>
        </div>
      </div>
      
      <p style="font-size: 12px; color: #6b7280; margin: 16px 0 0 0;">
        ${formData.isWithinArea 
          ? 'Log in op het admin panel om de afspraak te bevestigen.'
          : 'Controleer de afstand vanaf Wezep en bespreek mogelijkheden voordat je contact opneemt.'
        }
      </p>
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
    <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto;">
      <!-- Header -->
      <div style="background-color: #059669; padding: 24px; color: white; border-radius: 8px 8px 0 0;">
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <div style="font-size: 20px; font-weight: bold;">EQDent</div>
          <div style="text-align: right; font-size: 14px; opacity: 0.9;">
            Professionele paardentandheelkunde bij het paard thuis
          </div>
        </div>
      </div>
      
      <!-- Body -->
      <div style="padding: 32px; background-color: white; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
        <div style="margin-bottom: 24px;">
          <h1 style="color: #059669; font-size: 24px; font-weight: 300; margin: 0 0 8px 0;">Bedankt voor uw afspraakaanvraag</h1>
          <p style="color: #6b7280; margin: 0;">Wij nemen binnen twee werkdagen contact met u op</p>
        </div>
        
        <div style="margin-bottom: 24px;">
          <p style="color: #374151; margin: 0 0 16px 0;">Beste ${formData.firstName},</p>
          
          <p style="color: #374151; line-height: 1.6; margin: 0 0 24px 0;">
            Hartelijk dank voor uw vertrouwen in EQDent. Wij hebben uw afspraakaanvraag 
            ontvangen en zullen binnen twee werkdagen telefonisch contact met u opnemen om een geschikte 
            tijd in te plannen voor de tandheelkundige zorg van uw paard op locatie.
          </p>
          
          <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 24px; margin-bottom: 24px;">
            <h3 style="color: #059669; font-weight: 600; margin: 0 0 12px 0;">Wat kunt u verwachten:</h3>
            <ul style="margin: 0; padding-left: 0; list-style: none; color: #374151;">
              <li style="display: flex; align-items: flex-start; gap: 12px; margin-bottom: 8px;">
                <span style="color: #10b981; margin-top: 2px;">✓</span>
                <span>Telefonisch contact binnen twee werkdagen</span>
              </li>
              <li style="display: flex; align-items: flex-start; gap: 12px; margin-bottom: 8px;">
                <span style="color: #10b981; margin-top: 2px;">✓</span>
                <span>Tandheelkundige zorg op uw locatie - binnen 30 minuten vanaf Wezep</span>
              </li>
              <li style="display: flex; align-items: flex-start; gap: 12px; margin-bottom: 8px;">
                <span style="color: #10b981; margin-top: 2px;">✓</span>
                <span>Dezelfde aandacht en precisie als in een klinische setting</span>
              </li>
              <li style="display: flex; align-items: flex-start; gap: 12px;">
                <span style="color: #10b981; margin-top: 2px;">✓</span>
                <span>15+ jaar ervaring in paardentandheelkunde</span>
              </li>
            </ul>
          </div>
          
          <div style="background-color: #ecfdf5; border: 1px solid #10b981; border-radius: 8px; padding: 24px; margin-bottom: 24px;">
            <h3 style="color: #059669; font-weight: 600; margin: 0 0 8px 0;">Heeft u vragen?</h3>
            <p style="color: #059669; margin: 0;">
              Voor vragen over uw afspraak kunt u contact opnemen via 
              <strong>contact@eqdent.nl</strong>
            </p>
          </div>
        </div>
        
        <div style="border-top: 1px solid #e5e7eb; padding-top: 24px;">
          <p style="color: #374151; margin: 0 0 12px 0;">Met vriendelijke groet,</p>
          <div style="margin-top: 12px;">
            <p style="font-weight: 600; color: #111827; margin: 0;">drs. Mark van Manen</p>
            <p style="color: #6b7280; margin: 0;">oprichter en tandheelkundig paardenarts - EQDent</p>
            <p style="color: #10b981; font-size: 14px; margin: 0;">www.eqdent.nl</p>
          </div>
        </div>
      </div>
      
      <!-- Footer -->
      <div style="background-color: #f3f4f6; padding: 16px; text-align: center; border-radius: 0 0 8px 8px;">
        <p style="font-size: 12px; color: #6b7280; margin: 0;">
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
  try {
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const address = formData.get("address") as string
    const stalAddress = formData.get("stalAddress") as string

    if (!firstName || !lastName || !email || !phone || !address || !stalAddress) {
      throw new Error("Alle velden zijn verplicht")
    }

    const timestamp = new Date().toLocaleString('nl-NL', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })

    // Check if location is within service area
    const { isWithinArea } = calculateDistance(stalAddress)

    const submissionData = {
      firstName,
      lastName,
      email,
      phone,
      address,
      stalAddress,
      timestamp,
      isWithinArea
    }

    // Send both emails in parallel
    const [adminResult, clientResult] = await Promise.allSettled([
      sendAdminNotification(submissionData),
      sendClientConfirmation({ firstName, lastName, email })
    ])

    // Log results for debugging
    console.log("Email submission results:", {
      admin: adminResult,
      client: clientResult,
      submissionData
    })

    // Check if at least one email was sent successfully
    if (adminResult.status === 'rejected' && clientResult.status === 'rejected') {
      throw new Error("Er is een probleem opgetreden bij het versturen van de e-mails")
    }

    return {
      success: true,
      message: `Bedankt ${firstName}! Uw afspraakaanvraag is ontvangen. Wij nemen binnen twee werkdagen contact met u op om een afspraak in te plannen.`,
    }

  } catch (error) {
    console.error("Form submission error:", error)
    return {
      success: false,
      message: "Er is een fout opgetreden. Probeer het opnieuw of neem direct contact met ons op.",
    }
  }
}
