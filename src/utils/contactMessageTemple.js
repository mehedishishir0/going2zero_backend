const createContactEmailTemplate = ({ name, email, phone_number, subject, message }) => {
    return `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4; padding: 30px;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
          <div style="background-color: #4a90e2; color: #ffffff; padding: 20px;">
            <h2 style="margin: 0;">New Contact Message</h2>
          </div>
          <div style="padding: 20px; color: #333;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #4a90e2;">${email}</a></p>
            <p><strong>Phone Number:</strong> ${phone_number}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;" />
            <p><strong>Message:</strong></p>
            <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #4a90e2; border-radius: 4px; white-space: pre-line;">
              ${message}
            </div>
          </div>
          <div style="background-color: #fafafa; padding: 15px; text-align: center; font-size: 12px; color: #888;">
            <p>This message was submitted via your website contact form.</p>
          </div>
        </div>
      </div>
    `;
  };
  
  module.exports = createContactEmailTemplate;
  