import AOS from "aos";
import "aos/dist/aos.css";
import validateForm from "./modules/validate";
import openLoginNav from "./modules/login-nav";
AOS.init();

openLoginNav()

validateForm()


