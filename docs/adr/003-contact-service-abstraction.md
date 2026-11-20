# ADR 003: Contact Service Abstraction

## Context
The contact form requires strict validation (via React Hook Form and Zod) and a reliable submission mechanism. In early portfolio deployment stages, a dedicated email backend endpoint or third-party email provider (e.g., EmailJS, Resend) may not yet be connected. Pretending a message was sent when no backend exists is misleading, while breaking the form on submit impairs the recruiter experience.

## Decision
We introduced an abstracted service layer `src/services/contactService.js`:
1. Provides a single async method: `sendMessage({ name, email, subject, message })`.
2. Includes an `isConfigured` toggle.
3. When `isConfigured: false`, it simulates a brief network roundtrip (1200ms) to exercise the UI loading spinner, logs the validated payload to the console, and provides transparent feedback to the visitor that client validation succeeded and includes direct direct email contact instructions (`sudipbhuniya542@gmail.com`).
4. When `isConfigured: true`, it forwards the payload to the configured API route or service without touching the React component code.

## Consequences
- Clean separation between form UI, form validation, and data transmission.
- Honest, transparent user feedback at all stages of deployment.
- Seamless transition to real email delivery when credentials or endpoints are supplied.
