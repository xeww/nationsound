import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Question from "../components/Question/Question.jsx";
import Separator from "../components/Separator.jsx";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop.jsx";
import SubTitle from "../components/SubTitle/SubTitle.jsx";
import { QuestionIcon } from "../utils/Svgs.jsx";

export default function Faq() {
  return (
    <>
      <div className="main-wrapper">
        <Header />
        <Separator margin="20" />
        <SubTitle svgIcon={<QuestionIcon />} text="Foire aux questions" />

        <Question
          question="Comment puis-je acheter des billets pour un concert ?"
          answer="Vous pouvez acheter des billets pour le concert souhaité en cliquant sur le bouton 'Acheter des tickets' dans la page des programmations."
        />

        <Question
          question="Quels sont les modes de paiement acceptés ?"
          answer="Nous acceptons les cartes de crédit (Visa, MasterCard, American Express), PayPal, et les virements bancaires."
        />

        <Question
          question="Puis-je obtenir un remboursement si je ne peux pas assister au concert ?"
          answer="Les politiques de remboursement varient selon les concerts. Veuillez consulter les conditions de vente spécifiques à chaque événement."
        />

        <Question
          question="Puis-je revendre mon billet si je ne peux pas assister au concert ?"
          answer="La revente de billets est strictement interdite. Pour plus d'information, veuillez consulter nos mentions légales."
        />

        <Question
          question="Quels artistes se produiront prochainement ?"
          answer="Consultez notre page des programmations pour voir la liste des concerts à venir et des artistes programmés."
        />

        <Question
          question="À quelle heure commencent les concerts ?"
          answer="Les heures de début des concerts sont indiquées sur les pages des événements respectifs. Généralement, les portes ouvrent une heure avant le début du concert."
        />

        <Question
          question="Où se déroulent les concerts ?"
          answer="Les concerts ont lieu dans diverses scènes. Les adresses et informations sur les lieux sont disponibles sur la page des programmations ainsi que sur notre carte interactive."
        />

        <Separator margin="30" />
        <ScrollToTop />
      </div>
      <Footer />
    </>
  );
}
