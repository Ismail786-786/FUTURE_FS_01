import { useState, type FormEvent } from "react";
import { Github, Linkedin, Loader2, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import { CONTACT } from "./data";

type Fields = { name: string; email: string; subject: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const EMPTY: Fields = { name: "", email: "", subject: "", message: "" };

function validate(values: Fields): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = "Enter a valid email address.";
  if (values.subject.trim().length < 3) errors.subject = "Add a short subject.";
  if (values.message.trim().length < 10)
    errors.message = "Message should be at least 10 characters.";
  return errors;
}

export function Contact() {
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof Fields, boolean>>>({});
  const [loading, setLoading] = useState(false);

  const update = (key: keyof Fields, value: string) => {
    const next = { ...values, [key]: value };
    setValues(next);
    if (touched[key]) setErrors(validate(next));
  };

  const blur = (key: keyof Fields) => {
    setTouched((t) => ({ ...t, [key]: true }));
    setErrors(validate(values));
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    setTouched({ name: true, email: true, subject: true, message: true });
    if (Object.keys(found).length > 0) {
      toast.error("Please fix the highlighted fields.");
      return;
    }
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setLoading(false);
    setValues(EMPTY);
    setTouched({});
    toast.success("Message sent — I'll get back to you soon.");
  };

  const fieldClass = (key: keyof Fields) =>
    `mt-1.5 w-full rounded-lg border bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-primary ${
      touched[key] && errors[key] ? "border-destructive" : "border-border"
    }`;

  return (
    <section id="contact" className="section-shell border-t border-border py-16 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow">05 — Contact</p>
          <h2 className="mt-3 text-2xl font-bold text-balance sm:text-3xl">
            Let&apos;s build something.
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            Open to internships, freelance builds, and collaborations across web, AI, and IoT.
          </p>
          <div className="mt-6 space-y-3 text-sm">
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-3 transition-colors hover:text-primary"
            >
              <span className="grid size-9 place-items-center rounded-xl border border-border bg-secondary text-primary">
                <Mail className="size-4" strokeWidth={1.75} />
              </span>
              {CONTACT.email}
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 transition-colors hover:text-primary"
            >
              <span className="grid size-9 place-items-center rounded-xl border border-border bg-secondary text-primary">
                <Linkedin className="size-4" strokeWidth={1.75} />
              </span>
              LinkedIn profile
            </a>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 transition-colors hover:text-primary"
            >
              <span className="grid size-9 place-items-center rounded-xl border border-border bg-secondary text-primary">
                <Github className="size-4" strokeWidth={1.75} />
              </span>
              GitHub profile
            </a>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          noValidate
          className="surface-card grid gap-4 rounded-2xl p-6 sm:grid-cols-2 lg:col-span-7"
        >
          {(
            [
              ["name", "Name", "Jane Doe", "text"],
              ["email", "Email", "jane@studio.com", "email"],
            ] as const
          ).map(([key, label, placeholder, type]) => (
            <label key={key} className="block">
              <span className="text-xs font-medium text-muted-foreground">{label}</span>
              <input
                type={type}
                value={values[key]}
                placeholder={placeholder}
                onChange={(e) => update(key, e.target.value)}
                onBlur={() => blur(key)}
                className={fieldClass(key)}
              />
              {touched[key] && errors[key] && (
                <span className="mt-1 block text-xs text-destructive">{errors[key]}</span>
              )}
            </label>
          ))}

          <label className="block sm:col-span-2">
            <span className="text-xs font-medium text-muted-foreground">Subject</span>
            <input
              type="text"
              value={values.subject}
              placeholder="Project enquiry"
              onChange={(e) => update("subject", e.target.value)}
              onBlur={() => blur("subject")}
              className={fieldClass("subject")}
            />
            {touched.subject && errors.subject && (
              <span className="mt-1 block text-xs text-destructive">{errors.subject}</span>
            )}
          </label>

          <label className="block sm:col-span-2">
            <span className="text-xs font-medium text-muted-foreground">Message</span>
            <textarea
              rows={5}
              value={values.message}
              placeholder="Tell me about what you're building…"
              onChange={(e) => update("message", e.target.value)}
              onBlur={() => blur("message")}
              className={`${fieldClass("message")} resize-none`}
            />
            {touched.message && errors.message && (
              <span className="mt-1 block text-xs text-destructive">{errors.message}</span>
            )}
          </label>

          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85 disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Loader2 className="size-4 animate-spin" strokeWidth={2} /> Sending…
                </>
              ) : (
                <>
                  <Send className="size-4" strokeWidth={2} /> Send message
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
