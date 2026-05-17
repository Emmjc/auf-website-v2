import Link from "next/link";
import { notFound } from "next/navigation";
import { getCollegeById, getCollegeBySlug, collegeLabel } from "@/data/colleges";
import { listPublishedPostsForCollege } from "@/server/services/posts";
import { formatDate } from "@/lib/utils";
import CollegeHero from "@/components/public/college/CollegeHero";
import CollegeSection from "@/components/public/college/CollegeSection";
import CollegeSubnav from "@/components/public/college/CollegeSubnav";
import Footer from "@/components/public/Footer";
import type { CollegeNavIcon } from "@/components/public/college/CollegeSubnav";

const goals = [
  "Develop awareness of physical, social, economic, cultural, and spiritual problems of society.",
  "Acquire knowledge, skills, and attitudes for health improvement and quality of life.",
  "Adopt a research-oriented attitude using nursing process and research findings.",
  "Imbibe spiritual and ethical values in the provision of quality patient care.",
  "Enhance leadership potentials to function independently or in collaboration with others.",
];

const affiliations = [
  "Angeles University Foundation Medical Center",
  "Jose B. Lingad Memorial Regional Hospital",
  "Ospital Ning Angeles",
  "Sitio Monicayo, Brgy. Lourdes Sur East, Brgy. Lourdes Northwest, Brgy. Sto. Domingo, Brgy. Pulungbulu, Brgy. Pulung Cacutud, Brgy. Balibago, Brgy. Mining, Brgy. Sapa Libutad, Brgy. Ninoy Aquino, Brgy. Cutcut, Brgy. San Jose, and Diosdado Macapagal Village",
  "Mabalacat District Hospital",
  "Balitucan District Hospital",
  "Diosdado P. Macapagal District Hospital",
  "Ricardo P. Rodriguez Memorial District Hospital",
  "Mariveles Mental Ward",
  "National Center for Mental Health",
  "Philippine Orthopedic Hospital",
  "San Lazaro Hospital",
];

const topnotchers = [
  { year: "1983", name: "Dennis Nuñez", place: "8th" },
  { year: "1984", name: "Ester Sanchez", place: "5th" },
  { year: "1985", name: "Rowena Tamayo", place: "7th" },
  { year: "1985", name: "Dinah Doliente", place: "7th" },
  { year: "1985", name: "Glenda Tio", place: "15th" },
  { year: "1985", name: "Rhonda Tamayo", place: "16th" },
  { year: "1986", name: "Marilou Bautista", place: "16th" },
  { year: "1986", name: "Grace Abad", place: "17th" },
  { year: "1986", name: "Lydia Arevalo", place: "19th" },
  { year: "1986", name: "Elmo Acosta", place: "20th" },
  { year: "1987", name: "Norman Hester", place: "11th" },
  { year: "1987", name: "Antonette Clemente", place: "12th" },
  { year: "1987", name: "Alejandro Allanigue Jr.", place: "19th" },
  { year: "1987", name: "Soledad Capuno", place: "13th" },
  { year: "1989", name: "David Jones", place: "11th" },
  { year: "1989", name: "Roesette Bencgo", place: "19th" },
  { year: "1990", name: "Elenita Batiller", place: "19th" },
  { year: "1991", name: "Carolina Comendador", place: "16th" },
  { year: "1991", name: "Edsel Feliciano", place: "17th" },
  { year: "1991", name: "Cristina Perez", place: "19th" },
  { year: "1991", name: "Dolorosa Ticsay", place: "20th" },
  { year: "1992", name: "Juliana Katrina Briones", place: "14th" },
  { year: "1992", name: "Marlo Castor", place: "16th" },
  { year: "1993", name: "Edward Jay Mallari", place: "13th" },
  { year: "1994", name: "Jocelyn Baking", place: "15th" },
  { year: "1994", name: "Vicky Marquez", place: "15th" },
  { year: "1994", name: "Joy Samson", place: "16th" },
  { year: "1994", name: "Elmer Cirilo Pascual", place: "17th" },
  { year: "1994", name: "Rosette Zamora", place: "18th" },
  { year: "1994", name: "Pamela Cagaanan", place: "19th" },
  { year: "1994", name: "Laurence Smith", place: "19th" },
  { year: "1994", name: "Ma. Lourdes Paras", place: "20th" },
  { year: "1995", name: "Emil Cano", place: "13th" },
  { year: "1995", name: "Jennifer Si", place: "16th" },
  { year: "1995", name: "Jeffrey Simpao", place: "18th" },
  { year: "1995", name: "Anna Lyn Maniago", place: "19th" },
  { year: "1995", name: "Donel Enriquez", place: "20th" },
  { year: "1995", name: "Judith Dimatulac", place: "20th" },
  { year: "1996", name: "Jerome David", place: "19th" },
  { year: "1996", name: "Melanie Dayrit", place: "19th" },
  { year: "1997", name: "Michelle Linaban", place: "5th" },
  { year: "1997", name: "Winnie Antonio", place: "14th" },
  { year: "1997", name: "Joy Mallari", place: "20th" },
  { year: "1999", name: "Chona M. Feliciano", place: "11th" },
  { year: "2002", name: "Jocelyn B. Datu", place: "19th" },
  { year: "2003", name: "Ryan T. Dizon", place: "2nd" },
  { year: "2003", name: "Alvin Z. Feliciano", place: "8th" },
  { year: "2003", name: "Jo-Anne V. David", place: "17th" },
  { year: "2003", name: "Kristine G. Agapay", place: "18th" },
  { year: "2003", name: "Karen Kaithleen L. Layug", place: "18th" },
  { year: "2003", name: "Richelle C. Sarabia", place: "20th" },
  { year: "2004", name: "Vincent R. Rebugio", place: "8th" },
  { year: "2004", name: "Carina C. Ayson", place: "11th" },
  { year: "2004", name: "Ma. Karen V. Batac", place: "18th" },
  { year: "2004", name: "Cheryll P. Pangan", place: "18th" },
  { year: "2004", name: "Jelu C. Nogoy", place: "19th" },
  { year: "2004", name: "Andress S. Panlican", place: "19th" },
  { year: "2006", name: "Joy L. Delfin", place: "7th" },
  { year: "2006", name: "Angela Florence O. Dulay", place: "9th" },
  { year: "2006", name: "Marjorie S. Henson", place: "9th" },
  { year: "2006", name: "Kenneth P. Bisda", place: "10th" },
  { year: "2006", name: "Jocelle O. Kho", place: "10th" },
  { year: "2006", name: "Maria Chriselda O. Ventura", place: "10th" },
  { year: "2006", name: "Niña Joyce P. Yalung", place: "10th" },
  { year: "2007", name: "Hazel Aileen U. Malig", place: "12th" },
  { year: "2007", name: "Joanne Marie R. Galang", place: "14th" },
  { year: "2007", name: "Cherry Mae G. Parpan", place: "14th" },
  { year: "2007", name: "Carlo Rigor C. Pineda", place: "16th" },
  { year: "2008", name: "Jamie Anne T. Tinio", place: "4th" },
  { year: "2008", name: "Rose Anne M. Mungcal", place: "7th" },
  { year: "2008", name: "Rolly M. Policarpio", place: "9th" },
  { year: "2008", name: "Sarah Mae C. Capulong", place: "10th" },
  { year: "2008", name: "Gerard Vincent A. Aguas", place: "11th" },
  { year: "2008", name: "Rosella Marie M. Ocampo", place: "12th" },
  { year: "2008", name: "Marikar S. Tabliga", place: "12th" },
  { year: "2008", name: "Patrick Kelly O. Mangune", place: "13th" },
  { year: "2008", name: "Rose Ann L. Patdue", place: "14th" },
  { year: "2008", name: "Ronnie B. Romero", place: "14th" },
  { year: "2008", name: "Lore Dionne F. Candelaria", place: "15th" },
  { year: "2008", name: "Barbie Anne O. Chingcuangco", place: "15th" },
  { year: "2008", name: "Jonelle Dane T. Lagman", place: "15th" },
  { year: "2008", name: "Jomel Jerome T. Dizon", place: "16th" },
  { year: "2008", name: "Ma. Theresa E. Malit", place: "16th" },
  { year: "2008", name: "Khimilue B. Montemayor", place: "16th" },
  { year: "2008", name: "Florence M. Blanco", place: "17th" },
  { year: "2008", name: "Ralph Michael D. Dungca", place: "17th" },
  { year: "2008", name: "Jennifer Mae S. Pecson", place: "18th" },
  { year: "2008", name: "Christine Ivy C. Pineda", place: "18th" },
  { year: "2008", name: "Princess Victoria G. Francisco", place: "19th" },
  { year: "2008", name: "Pocholo Albelio T. Henson", place: "19th" },
  { year: "2008", name: "Anne Lorainne L. Mendoza", place: "19th" },
  { year: "2008", name: "Francis Louwie Anthony A. Navos", place: "20th" },
  { year: "2008", name: "Arnaldo L. Albelda Jr.", place: "20th" },
  { year: "2008", name: "John Benedict D. Lagbas", place: "20th" },
  { year: "2008", name: "Joemar D. Manalac", place: "20th" },
  { year: "2008", name: "Sherwin M. Quizon", place: "20th" },
  { year: "2008", name: "Eligio David P. Soliman Jr.", place: "20th" },
  { year: "2008", name: "Charina Rose Y. Yambao", place: "20th" },
  { year: "2009", name: "Jian Laurice R. Sicat", place: "10th" },
  { year: "2009", name: "Editha B. Guevarra", place: "11th" },
  { year: "2009", name: "Noel Victor S. Pamintuan", place: "14th" },
  { year: "2009", name: "Gail Anne P. Ducut", place: "16th" },
  { year: "2009", name: "Carl Alvin M. Calaquian", place: "17th" },
  { year: "2009", name: "Aileen Y. Reyes", place: "17th" },
  { year: "2009", name: "Mary Ann S. Cortez", place: "17th" },
  { year: "2009", name: "Mary Anne T. Enriquez", place: "18th" },
  { year: "2009", name: "Kristine Rose S. Layug", place: "18th" },
  { year: "2009", name: "Ethel Jane C. Patriarca", place: "18th" },
  { year: "2009", name: "Daphne C. Dy", place: "19th" },
  { year: "2009", name: "Carlo G. Tolentino", place: "19th" },
  { year: "2010", name: "Nico Paulo M. Dimal", place: "7th" },
  { year: "2010", name: "Arcel T. Cabigting", place: "9th" },
  { year: "2010", name: "Mary Valerie P. Rivera", place: "11th" },
  { year: "2010", name: "Criselle Ann A. Sanguyu", place: "13th" },
  { year: "2010", name: "James R. Sta. Maria", place: "14th" },
  { year: "2010", name: "Anne Marie L. Mendoza", place: "14th" },
  { year: "2010", name: "Junnel T. Calma", place: "14th" },
  { year: "2010", name: "Margie P. Sadie", place: "16th" },
  { year: "2010", name: "Norina Dean D. Ramos", place: "16th" },
  { year: "2010", name: "France B. Muldong", place: "16th" },
  { year: "2010", name: "Vecher Amor C. Miguel", place: "17th" },
  { year: "2010", name: "Jan Dustin D. Gopez", place: "17th" },
  { year: "2010", name: "Jeiel T. Galang", place: "17th" },
  { year: "2010", name: "Alan Christopher Canlapan", place: "17th" },
  { year: "2010", name: "Daniel T. Palcis", place: "18th" },
  { year: "2010", name: "Jennu S. Manaloto", place: "18th" },
  { year: "2010", name: "Mark Rovin C. Malit", place: "18th" },
  { year: "2010", name: "Ariane Camille M. Calma", place: "18th" },
  { year: "2010", name: "Erika Bianca T. Quiazon", place: "19th" },
  { year: "2010", name: "Maria Eula R. Perez", place: "19th" },
  { year: "2010", name: "Luigi Miguel H. De Jesus", place: "19th" },
  { year: "2010", name: "Ariane Kamille Andex", place: "20th" },
  { year: "2010", name: "Aljon N. Villanueva", place: "20th" },
  { year: "2010", name: "Frances Anne Mae Reyes", place: "20th" },
  { year: "2010", name: "Joanna Michelle P. Quero", place: "20th" },
  { year: "2010", name: "Elaine V. Puno", place: "20th" },
  { year: "2010", name: "Maryam A. Pineda", place: "20th" },
  { year: "2010", name: "Kathleen Gail Pelayo", place: "20th" },
  { year: "2010", name: "Marie Pas M. Naguit", place: "20th" },
  { year: "2010", name: "Melissa B. Figueroa", place: "20th" },
  { year: "2010", name: "Jenzzen Q. Cordero", place: "20th" },
  { year: "2010", name: "Katrina C. Bituin", place: "20th" },
  { year: "2010", name: "Arvy D. Baluyut", place: "20th" },
  { year: "2011", name: "Nicole Marie T. Severino", place: "6th" },
  { year: "2011", name: "Jefferson D. Ricafort", place: "13th" },
  { year: "2011", name: "Waverly Chenelle S. Carlos", place: "14th" },
  { year: "2011", name: "Rose Ann B. Guevarra", place: "14th" },
  { year: "2011", name: "Christine Ann A. Sanguyu", place: "14th" },
  { year: "2011", name: "Abegail S. Torres", place: "14th" },
  { year: "2011", name: "Christina Marie D. Ocampo", place: "15th" },
  { year: "2011", name: "Abegail M. Lacson", place: "15th" },
  { year: "2011", name: "Raymund Joseph V. Layug", place: "18th" },
  { year: "2011", name: "Princess Apple D. Nunag", place: "18th" },
  { year: "2011", name: "Jan Axel L. Yusi", place: "18th" },
  { year: "2011", name: "Francis Jonell B. Basilio", place: "19th" },
  { year: "2011", name: "Jerland S. Casilan", place: "19th" },
  { year: "2011", name: "Philip Kasper M. Medina", place: "19th" },
  { year: "2011", name: "Ivy Q. Nacpil", place: "19th" },
  { year: "2011", name: "Joel Carlo S. Tumang", place: "19th" },
  { year: "2011", name: "Princess Marie D. Cruz", place: "20th" },
  { year: "2011", name: "Reighner G. Manuel", place: "20th" },
  { year: "2011", name: "Michael M. Rivera", place: "20th" },
  { year: "2011", name: "April Ann D. Valencia", place: "20th" },
  { year: "2012", name: "Gizelle C. Cano", place: "6th" },
  { year: "2012", name: "Maricris S. Sampang", place: "12th" },
  { year: "2012", name: "Roseller R. Manalang", place: "13th" },
  { year: "2012", name: "Kim P. Romero", place: "13th" },
  { year: "2012", name: "Marianne L. Delos Reyes", place: "15th" },
  { year: "2012", name: "Irish Jianne Y. Espiritu", place: "15th" },
  { year: "2012", name: "Geliza D. Recede", place: "15th" },
  { year: "2012", name: "Jorel Jade C. David", place: "16th" },
  { year: "2012", name: "Ashley T. Lumba", place: "16th" },
  { year: "2012", name: "Alyssa Mizhelle L. Ocampo", place: "16th" },
  { year: "2012", name: "Lilith G. Reyes", place: "16th" },
  { year: "2012", name: "Emilie Jane M. Canilang", place: "17th" },
  { year: "2012", name: "Denice T. Dizon", place: "17th" },
  { year: "2012", name: "Anna Patricia E. Gaza", place: "17th" },
  { year: "2012", name: "Catherine Claire A. Pangilinan", place: "17th" },
  { year: "2012", name: "Mary Allen S. Soliman", place: "17th" },
  { year: "2012", name: "Bryan Christopher Yanguas", place: "17th" },
  { year: "2012", name: "Shayne M. Dimla", place: "18th" },
  { year: "2012", name: "Nikki D. Dela Cruz", place: "19th" },
  { year: "2012", name: "Trisha Aina P. David", place: "19th" },
  { year: "2012", name: "Abigail D. Espiritu", place: "19th" },
  { year: "2012", name: "Maria Fatima V. Martinez", place: "19th" },
  { year: "2012", name: "Carla J. Pangilinan", place: "19th" },
  { year: "2012", name: "Nikki Jireh F. Ventura", place: "19th" },
  { year: "2012", name: "Lady Diana M. Ayson", place: "20th" },
  { year: "2012", name: "Abegail T. Cunanan", place: "20th" },
  { year: "2012", name: "John Aufer D. David", place: "20th" },
  { year: "2012", name: "Lorraine P. Fualo", place: "20th" },
  { year: "2012", name: "Patricia Bettina L. Gonzales", place: "20th" },
  { year: "2012", name: "Fria Merielle W. Laxamana", place: "20th" },
  { year: "2012", name: "William Renz P. Mallare", place: "20th" },
  { year: "2012", name: "Jamie G. Reyes", place: "20th" },
  { year: "2013", name: "Anjelle Roselle F. Gagui", place: "14th" },
  { year: "2013", name: "Renato Jr. C. Galvan", place: "14th" },
  { year: "2013", name: "Samantha B. Pamintuan", place: "14th" },
  { year: "2013", name: "Raymond Christopher Lim", place: "15th" },
  { year: "2013", name: "Aldryn Jon T. Pagador", place: "15th" },
  { year: "2013", name: "Kristine Marie R. Mendoza", place: "18th" },
  { year: "2013", name: "Cassandra Faith T. Quijano", place: "18th" },
  { year: "2013", name: "Reann Marie V. Dayrit", place: "19th" },
  { year: "2013", name: "Joy P. Soan", place: "19th" },
  { year: "2013", name: "Maiquilouise C. Hurtado", place: "20th" },
  { year: "2013", name: "Sharla May P. Paz", place: "20th" },
  { year: "2014", name: "Angela Loren G. Panlilio", place: "9th" },
  { year: "2014", name: "Roxenette Gill B. Pangilinan", place: "10th" },
  { year: "2014", name: "Ma. Kathrina C. Turla", place: "14th" },
  { year: "2014", name: "Kenz Myrel R. Hernandez", place: "15th" },
  { year: "2014", name: "Rachelle Gil B. Pangilinan", place: "15th" },
  { year: "2014", name: "Carlo R. Tongol", place: "15th" },
  { year: "2014", name: "Paul Jasper A. Leongson", place: "18th" },
  { year: "2015", name: "Mikaela Marie B. Medina", place: "6th" },
  { year: "2015", name: "Alexandra Marie M. Allanigue", place: "10th" },
  { year: "2015", name: "Nico Eulogio P. Tiu", place: "10th" },
  { year: "2015", name: "Nicole Sharina L. Sarmiento", place: "13th" },
  { year: "2015", name: "Mark Allen G. Soliman", place: "14th" },
  { year: "2015", name: "Maria Elaine D. Masbang", place: "15th" },
  { year: "2015", name: "Jonas Kirby R. Solis", place: "15th" },
  { year: "2015", name: "Krizane C. Ingal", place: "16th" },
  { year: "2015", name: "Clauder Danielle I. Alfonso", place: "16th" },
  { year: "2015", name: "Shaleine Laine S. Lugue", place: "17th" },
  { year: "2015", name: "Erika R. Ocampo", place: "17th" },
  { year: "2015", name: "Jaime II B. Balingit", place: "18th" },
  { year: "2015", name: "Leanne Joy M. Ballesteros", place: "18th" },
  { year: "2015", name: "Chared Joy D. Lumba", place: "18th" },
  { year: "2015", name: "Czarina Anne P. Pallasigui", place: "18th" },
  { year: "2015", name: "Claise Zanare R. Santos", place: "18th" },
  { year: "2015", name: "Denise Erika T. Batungbakal", place: "19th" },
  { year: "2015", name: "Princess Sarah H. Calaguas", place: "19th" },
  { year: "2015", name: "Dennise L. Agravantes", place: "20th" },
  { year: "2015", name: "Eric G. Collado", place: "20th" },
  { year: "2015", name: "Bea Nikkisia D. Napalit", place: "20th" },
  { year: "2015", name: "Luigi D. Puno", place: "20th" },
];

const topnotchersByYear = topnotchers.reduce((acc, item) => {
  if (!acc[item.year]) acc[item.year] = [];
  acc[item.year].push(item);
  return acc;
}, {} as Record<string, { year: string; name: string; place: string }[]>);

const topnotcherYears = Object.keys(topnotchersByYear).sort(
  (a, b) => Number(b) - Number(a)
);

const facilities = [
  {
    title: "Nursing Arts Laboratory",
    detail:
      "Air-conditioned labs for basic nursing procedures with amphitheater setup and adjacent hospital simulation rooms.",
  },
  {
    title: "Nutrition Laboratories",
    detail:
      "Practice areas for Level II students with working, storage, and dining areas.",
  },
  {
    title: "Anatomy and Physiology Rooms",
    detail:
      "Labs with human anatomy models used for lecture and demonstrations.",
  },
];

export default async function CollegeOfNursingPage() {
  const college = getCollegeBySlug("nursing");
  if (!college || !college.isActive) notFound();

  const posts = await listPublishedPostsForCollege(college.id, { limit: 12 });

  const navItems: { id: string; label: string; icon: CollegeNavIcon }[] = [
    { id: "news", label: "News", icon: "news" },
    { id: "overview", label: "Overview", icon: "book" },
    { id: "vision", label: "Vision", icon: "target" },
    { id: "programs", label: "Programs", icon: "graduation" },
    { id: "accreditation", label: "Accreditation", icon: "clipboard" },
    { id: "organizations", label: "Student Orgs", icon: "book" },
    { id: "affiliations", label: "Affiliations", icon: "news" },
    { id: "topnotchers", label: "Topnotchers", icon: "news" },
    { id: "facilities", label: "Facilities", icon: "calendar" },
    { id: "contact", label: "Contact", icon: "phone" },
  ];

  return (
    <>
      <CollegeHero
        name={college.name}
        description={college.description}
        brandColor={college.brandColor}
        logoSrc="/colleges/con-logo.png"
        badges={["Global-ready", "Compassionate care", "Research-oriented"]}
      />

      <CollegeSubnav items={navItems} brandColor={college.brandColor} />

      <div className="mx-auto max-w-6xl px-6 py-12">
        <CollegeSection id="news" title="News & Blogs" icon="news">
          <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6">
            {posts.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-neutral-300 bg-white p-8 text-center text-sm text-neutral-500">
                No published posts yet.
              </div>
            ) : (
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((p) => {
                  const originCollege = p.originCollegeId
                    ? getCollegeById(p.originCollegeId)
                    : null;
                  const href = p.originCollegeId
                    ? `/c/${originCollege?.slug ?? p.originCollegeId}/posts/${p.slug}`
                    : `/posts/${p.slug}`;
                  return (
                    <li
                      key={p.id}
                      className="rounded-2xl border border-neutral-200 bg-white p-4"
                    >
                      <div className="text-xs uppercase tracking-wide text-neutral-500">
                        {collegeLabel(p.originCollegeId)} · {p.type}
                      </div>
                      <Link
                        href={href}
                        className="mt-1 block text-base font-semibold text-neutral-900 hover:underline"
                      >
                        {p.title}
                      </Link>
                      {p.excerpt ? (
                        <p className="mt-1 line-clamp-3 text-sm text-neutral-600">
                          {p.excerpt}
                        </p>
                      ) : null}
                      <div className="mt-3 text-xs text-neutral-500">
                        {p.publishedAt ? formatDate(p.publishedAt) : ""} · {p.author.name}
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </CollegeSection>
        <CollegeSection
          id="overview"
          title="CON Overview"
          subtitle="Quality nursing education for global impact."
          icon="book"
        >
          <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                College of Nursing
              </div>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                The College promotes quality nursing education geared towards competence,
                compassion, and competitiveness in the global context.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                College Goals
              </div>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {goals.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span
                      className="mt-2 h-1.5 w-1.5 rounded-full"
                      style={{ background: college.brandColor }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CollegeSection>

        <CollegeSection id="vision" title="Vision & Mission" icon="target">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Vision
              </div>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                The center for the promotion of quality nursing education geared towards
                competence, compassion, and competitiveness in the global context.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Mission
              </div>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                To develop quality nursing practice dedicated to disease prevention, health
                promotion, curative activities, and rehabilitation.
              </p>
            </div>
          </div>
        </CollegeSection>

        <CollegeSection id="programs" title="Academic Programs" icon="graduation">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">BS Nursing</div>
          </div>
        </CollegeSection>

        <CollegeSection id="accreditation" title="Accreditation" icon="clipboard">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-600">Accreditation details coming soon.</p>
          </div>
        </CollegeSection>

        <CollegeSection id="organizations" title="Student Organizations" icon="book">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-600">Student organization details coming soon.</p>
          </div>
        </CollegeSection>

        <CollegeSection id="affiliations" title="Affiliations" icon="news">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Base Hospital, Affiliating Hospitals and Communities
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {affiliations.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </CollegeSection>

        <CollegeSection id="topnotchers" title="Topnotchers" icon="news">
          <div className="space-y-4">
            {topnotcherYears.map((year) => (
              <details
                key={year}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 border-b border-slate-200 bg-slate-50 px-6 py-4 text-sm font-semibold text-slate-900">
                  <span>{year}</span>
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                    {topnotchersByYear[year].length} topnotcher
                    {topnotchersByYear[year].length > 1 ? "s" : ""}
                  </span>
                </summary>
                <div className="divide-y divide-slate-100">
                  {topnotchersByYear[year].map((item) => (
                    <div
                      key={`${item.year}-${item.name}-${item.place}`}
                      className="grid grid-cols-[1.6fr,0.6fr] gap-2 px-6 py-3 text-sm text-slate-600"
                    >
                      <div className="font-medium text-slate-900">{item.name}</div>
                      <div className="text-slate-700">{item.place}</div>
                    </div>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </CollegeSection>

        <CollegeSection id="facilities" title="Facilities" icon="calendar">
          <div className="grid gap-6 lg:grid-cols-3">
            {facilities.map((facility) => (
              <div
                key={facility.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="text-sm font-semibold text-slate-900">{facility.title}</div>
                <p className="mt-2 text-sm text-slate-600">{facility.detail}</p>
              </div>
            ))}
          </div>
        </CollegeSection>

        <CollegeSection id="contact" title="Contact" icon="phone">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Contact AUF CON
            </div>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              {college.contact.email ? <div>{college.contact.email}</div> : null}
              {college.contact.phone ? <div>{college.contact.phone}</div> : null}
              {college.contact.address ? <div>{college.contact.address}</div> : null}
            </div>
          </div>
        </CollegeSection>
      </div>

      <Footer />
    </>
  );
}
