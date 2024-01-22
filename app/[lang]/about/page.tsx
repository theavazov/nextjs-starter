import { Locale } from "@/i18n.config";
import Navbar from "@/utils/components/navbar";
import { getDictionary } from "@/utils/lib/i18n";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { greeting } = await getDictionary(lang);

  return (
    <section className="py-24">
      <div className="max-w-[1230px] w-full mx-auto px-[15px] flex flex-col gap-[20px]">
        <h1 className="text-3xl font-bold">{greeting} - About</h1>
        <Navbar lang={lang} />
      </div>
    </section>
  );
}
