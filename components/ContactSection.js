import SectionTitle from "./SectionTitle";
import SectionSubtitle from "./SectionSubtitle";
import ContactItem from "./ContactItem";

export default function ContactSection() {
  return (
    <section className="container mx-auto px-10 2xl:px-0">
      <div className="bg-primarygray flex rounded-lg flex-wrap">
        <div className="md:w-6/12 w-full md:border-r border-b border-primarygray-200">
          <div className="lg:py-16 lg:px-20 md:p-14 p-10">
            <SectionTitle left>Contact</SectionTitle>
            <SectionSubtitle left>
              Beberapa cara menghubungi saya.
            </SectionSubtitle>
            <ContactItem
              label="Mail"
              value="wridho246@gmail.com"
              icon="/mail.svg"
              className="mt-6"
            />
            <ContactItem
              label="Phone"
              value="0811231231123"
              icon="/phone.svg"
              className="mt-6"
            />
            <ContactItem
              label="Twitter"
              value="@wridho"
              icon="/twitter.svg"
              className="mt-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
