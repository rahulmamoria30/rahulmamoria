export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function sendContactForm(data: ContactFormData) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(responseData.error || "Failed to send message");
  }

  return responseData;
} 