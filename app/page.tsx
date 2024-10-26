"use client"
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Home() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const sectionRef = useRef(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
 
    gsap.from([titleRef.current, subtitleRef.current], {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3,
      ease: "power3.out",
    });


    gsap.from(sectionRef.current, {
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
    });

  
    if (contentRef.current) {
      gsap.from(contentRef.current.children, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.2,
        delay: 1,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <>
      <header>
        <section className="text-center">
          <h1 className="xl:text-[36px] md:text-[28px]" ref={titleRef}>
            გიორგი ბაჩიძე
          </h1>
          <h2 className="xl:text-[36px] md:text-[28px]" ref={subtitleRef}>
            ფირმის მენეჯმენტი
          </h2>
          <h3 className="xl:text-[32px] md:text-[24px]">
            საგზაო ინფრასტრუქტურის სრულყოფა თანამედროვე ტექნოლოგიებთან მიმართებით
          </h3>
        </section>

        <section
          className="w-[90%] m-auto border h-[600px] overflow-y-scroll"
          ref={sectionRef}
        >
          <div className="text-[24px] text-center p-4" ref={contentRef}>
            <p>
              <strong>აშშ</strong> იყენებს მოწინავე ტექნოლოგიებსა და დიდი
              ინვესტიციების მიდგომას საგზაო ინფრასტრუქტურის მოდერნიზაციაში.
              ქვეყნის მასშტაბით ტარდება ინიციატივები, როგორიცაა &quot;Vision Zero&quot;
              და &quot;ინტელექტუალური სატრანსპორტო სისტემები &quot;ITS&quot;, რომლებიც
              მიზნად ისახავს ავტოავარიების პრევენციასა და ტრანსპორტის
              უფრო ეფექტურ მართვას. მოდერნიზაცია მოიცავს სენსორებით აღჭურვილ
              საგზაო ინფრასტრუქტურას, დრონების გამოყენებას ინსპექტირებისათვის და
              ხელოვნურ ინტელექტზე დაფუძნებულ უსაფრთხოების სისტემებს.
            </p>
            <p>
              ამერიკის მახასიათებელი რეგიონების სპეციფიკიდან გამომდინარე,
              გზების ქსელის გაუმჯობესება მოიცავს ბუნებრივი კატასტროფების მიმართ
              გამძლეობის გაზრდას, განსაკუთრებით ისეთ რეგიონებში, როგორიცაა
              კალიფორნია და ტეხასი, სადაც ქარიშხლები, ტყის ხანძრები და
              მიწისძვრები ხშირია.
            </p>
            <p>
              <strong>ესპანეთი</strong> მსოფლიო ლიდერია საზოგადოებრივ-კერძო
              პარტნიორობის მოდელში, სადაც კერძო კომპანიები აქტიურად მონაწილეობენ
              ქვეყნის საგზაო ინფრასტრუქტურის მართვაში. ესპანეთის მთავრობამ
              გაავრცელა &quot;მწვანე კორიდორების&quot; იდეა, რაც ითვალისწინებს მარშრუტების
              ელექტროფიკაციას, სადაც ელექტრონული სატრანსპორტო საშუალებები
              სარგებობენ შესაბამისი დამტენების ინფრასტრუქტურით.
            </p>
            <p>
              ტრანსპორტის რეფორმები, რომლებიც ორიენტირებულია ავტოავარიების
              პრევენციაზე, მოიცავს გზების მარკირების გაუმჯობესებას,
              შუქნიშნების დამატებით კონტროლს და &quot;ჭკვიანი პარკირების&quot; სისტემის
              დანერგვას, რაც ხელს უწყობს ქალაქის სატრანსპორტო მარშრუტების
              უკეთეს ორგანიზებას.
            </p>
            <p>
              <strong>იტალია</strong> ფოკუსირებულია ეკოლოგიური და ურბანული
              ტრანსპორტის ხელშეწყობაზე. ეროვნული სტრატეგიის ნაწილი მიზნად ისახავს
              სატრანსპორტო სისტემა შეესაბამებოდეს ევროპის ეკოლოგიურ სტანდარტებს,
              რაც მოიცავს ურბანული ტრანსპორტის განახლებას, ტრანსპორტის გამწვანებას
              და სატრანსპორტო ქსელების კლიმატის მიმართ გამძლეობას.
            </p>
            <p>
              იტალიაში ფართოდ გავრცელდა სატრანსპორტო სისტემების &quot;მდგრადი
              მოძრაობის&quot; კონცეფცია, რომელიც მიზნად ისახავს ქალაქების უფრო
              ეკოლოგიურ განვითარებას, ტრანსპორტის უფრო ეფექტურად მართვას და
              ტრაფიკის ოპტიმიზაციას. მაგალითად, მილანი და რომი განსაკუთრებული
              აქცენტს აკეთებენ საჯარო ტრანსპორტის მდგრადობასა და
              ელექტროტრანსპორტის პოპულარიზაციაზე.
            </p>
            <p>
              <strong>საბერძნეთში</strong> 2024 წლიდან ძალაში შევიდა ახალი
              ინიციატივები, როგორიცაა &quot;Hellas 2030&quot;, რომელიც მოიცავს გზების
              მოდერნიზაციას, ურბანული სატრანსპორტო ქსელების გაუმჯობესებას
              და ტურიზმის ინფრასტრუქტურის განვითარებას. &quot;საბერძნეთის
              პარკირების&quot; ინოვაციური სისტემები და ქალაქის სატრანსპორტო
              მარშრუტების ახალი სტანდარტები ხელს უწყობს ქალაქების ტრანსპორტის
              უფრო გამჭვირვალობასა და ორგანიზებულობას.
            </p>
            <p>
              ტურიზმის მნიშვნელოვან როლს ბერძნულ ინფრასტრუქტურაში მხარს უჭერს
              აეროპორტების და პორტების ქსელების განვითარება, რომლებიც
              მნიშვნელოვნად უწყობენ ხელს ტურისტულ ზრდას.
            </p>
            <p>
              <strong>საქართველოში</strong>, ტრანსპორტისა და ინფრასტრუქტურის
              განვითარების ძირითადი გამოწვევა ფინანსური რესურსების შეზღუდულობაა.
              მიუხედავად ამისა, ქვეყანა აგრძელებს ტრაფიკის უსაფრთხოების
              გაუმჯობესებისკენ და სატრანსპორტო მარშრუტების მოდერნიზაციისკენ
              მიმართულ ნაბიჯებს. &quot;ტრანსპორტის განვითარების ფონდი&quot;,
              რომელიც ახლად დაარსდა, უზრუნველყოფს რესურსების გამოყენების
              ეფექტიანობას და ტრანსპორტის სტრუქტურის ოპტიმიზაციას.
            </p>
            <p>
              ქვეყანაში ასევე დანერგულია კამერების ახალი მონიტორინგის სისტემა,
              რაც საშუალებას აძლევს სატრანსპორტო მოძრაობის უფრო
              ეფექტურად მართვას და უსაფრთხოების გაუმჯობესებას. სიჩქარის
              კონტროლი და ახალი საგზაო წესები ხელს უწყობს მძღოლთა და
              პედესტრიანთა უსაფრთხოებას.
            </p>
            <p>
              აშშ, ესპანეთი, იტალია და საბერძნეთი აგრძელებენ ინოვაციური
              ტექნოლოგიების ინტეგრაციას, რაც ეხმარება ამ ქვეყნებს,
              გააუმჯობესონ ინფრასტრუქტურის მდგრადობა, უსაფრთხოება და
              ეკონომიკური შესაძლებლობები. საქართველო ასევე ცდილობს შეესაბამებოდეს
              ამ სტანდარტებს და გააუმჯობესოს ქვეყნის სატრანსპორტო მარშრუტები.
            </p>
          </div>
          <h1 className="text-[24px] text-center p-4">
            აშშ-ის, ესპანეთის, იტალიის, საბერძნეთისა და საქართველოს საგზაო
            ინფრასტრუქტურა ბოლო წლებში მნიშვნელოვნად განვითარდა, რაც ზრდის
            ამ ქვეყნების ეკონომიკურ და ტურისტულ მიმზიდველობას, ხოლო ახალი
            ტექნოლოგიების დანერგვა ხელს უწყობს უფრო ეფექტური და უსაფრთხო
            სატრანსპორტო სისტემების შექმნას.
          </h1>
        </section>
      </header>
    </>
  );
}
