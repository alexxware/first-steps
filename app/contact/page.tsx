import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Contact page',
    description: 'SEO Description',
    keywords: ['contact', 'information', 'alejandro']
}
const ContactPage = () => {
  return (
    <div className="flex flex-col items-center p-24">
      <span className="text-5xl">Contact Page</span>
    </div>
  )
}

export default ContactPage
