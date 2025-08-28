import Link from "next/link";
import data from "@/lib/pages.json";

export default async function NavMain() {
  return (
    // get pages from JSON-file
    <nav className="bg-white">
      <ul className="flex justify-end gap-4 text-2xl font-normal p-4">
        {data["pages"].map((link, index) => (
          <li key={index}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
