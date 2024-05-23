import style from "./About.module.css";
import Image from "next/image";
import EducationSection from "@/components/Education/education";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {
  return (
    <main>
      {/* <h2 className={style.about_heading}>About me</h2> */}
      <section className={style.about_section}>
        <div className={style.left_about_section}>
          {/* Dummy images */}
          {/* <div className={style.image_container}>
            <Image src="/images/img-1.jpeg" className={style.left_img_1} height={200} width={200} />
          </div>
          <div className={style.image_container}>
            <Image src="/images/img-2.jpeg" className={style.left_img_2} height={200} width={200} />
          </div>
          <div className={style.image_container}>
            <Image src="/images/img-1.avif" className={style.left_img_3} height={300} width={300} />
          </div> */}
          <div className={style.image_container}>
            <Image
              src="/images/img-4.jpeg"
              className={style.left_img}
              height={400}
              width={400}
            />
          </div>
        </div>
        <div className={style.right_about_section}>
        <h2 className={style.fancy_heading}>Rahul Mamoria</h2>
        <p className={style.description}>
            I was born on October 30, 2001, in Shahpura, Jaipur, Rajasthan. My
            early schooling took place in my village named Bagawas Chourasi
            until 10th grade. After that, I moved to Shahpura town to prepare
            for the IITJEE examination.
          </p>
          <p className={style.description}>
            Currently, I am working as a software engineer at Grid Dynamics,
            where I have been contributing for the past 8 months. In this role,
            I am involved in developing innovative solutions and collaborating
            with a talented team to deliver high-quality software products.
          </p>
          <ul className={style.contact_list}>
        <li className={style.contact_item}>
          <FontAwesomeIcon icon={faEnvelope} className={style.icon} />
          <span><strong>Email:</strong> rahulmamoria@gmail.com</span>
        </li>
        <li className={style.contact_item}>
          <FontAwesomeIcon icon={faPhone} className={style.icon} />
          <span><strong>Phone:</strong> +91 7690898460</span>
        </li>
        <li className={style.contact_item}>
          <FontAwesomeIcon icon={faMapMarkerAlt} className={style.icon} />
          <span><strong>Current Location:</strong> Hyderabad, India</span>
        </li>
      </ul>
        </div>
      </section>

      <EducationSection />
    </main>
  );
}
