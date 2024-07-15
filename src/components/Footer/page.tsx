"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="border-t p-8 mt-10 text-center text-sm">
      <div>© {currentYear} Samuel works</div>
    </div>
  );
}
