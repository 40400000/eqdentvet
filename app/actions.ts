"use server"

export async function submitWaitlistForm(formData: FormData) {
  // Simulate form processing delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const email = formData.get("email") as string
  const practice = formData.get("practice") as string

  // Here you would typically save to a database or send to an email service
  console.log("Waitlist submission:", {
    firstName,
    lastName,
    email,
    practice,
    timestamp: new Date().toISOString(),
  })

  return {
    success: true,
    message: `Bedankt ${firstName}! Je bent succesvol ingeschreven voor de wachtlijst. We houden je op de hoogte van alle ontwikkelingen.`,
  }
}
