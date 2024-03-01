import { Container, Row, Col } from "react-bootstrap";
import MyNavbar from "../../components/Navbar/Navbar";
import "./Home.css";
import progImg from "../../assets/images/undraw_programming_re_kg9v.svg";
import CourseItem from "../../components/Course/CourseItem";
import { useState } from "react";
import reactImage from "../../assets/images/React.png";
import javascriptImage from "../../assets/images/javascript.png";
import responsiveImage from "../../assets/images/responsive.png";
import tailwindImage from "../../assets/images/tailwind.png";
import Footer from "../../components/Footer/Footer";
function Home() {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "ریکت",
      image: reactImage,
      caption:
        "م ایپسوم متن ساخسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با",
    },
    {
      id: 2,
      title: "جاوااسکریپت",
      image: javascriptImage,
      caption:
        "م ایپسوم متن ساو بام ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با",
    },
    {
      id: 3,
      title: "تلویند",
      image: tailwindImage,
      caption:
        "رایط فعلی تکنولوژی موطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مو",
    },
    {
      id: 4,
      title: "رسپانسیو",
      image: responsiveImage,
      caption:
        "طرآنچنان که لی موطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مو",
    },
  ]);

  return (
    <div>
      <MyNavbar></MyNavbar>
      <Container fluid="md">
        <Row className="my-5 align-items-center">
          <Col lg="6">
            <h1 style={{ fontFamily: "Lalezar" }}>یادگیری برنامه نویسی</h1>
            <p style={{ textAlign: "justify" }}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </Col>
          <Col lg="6" className="py-4">
            <img src={progImg} className="img-fluid" />
          </Col>
        </Row>

        <Row className="my-5 ">
          {courses.map((course) => (
            <Col key={course.id} className="py-3" md="6" lg="4" xl="3">
              <CourseItem {...course}></CourseItem>
            </Col>
          ))}
        </Row>
      </Container>

      <Footer></Footer>
    </div>
  );
}
export default Home;
