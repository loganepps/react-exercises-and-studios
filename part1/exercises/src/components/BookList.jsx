export default function BookList() {
   let pageTitle = "Book List";
   let book1 = "https://www.sfbok.se/sites/default/files/styles/large/sfbok/sfbokbilder/730/730340.jpg?bust=1716902303&itok=szLdp52D";
   let book2 = "https://www.sfbok.se/sites/default/files/styles/large/sfbok/sfbokbilder/729/729157.jpg?bust=1713179018&itok=WJsqqa_W";
   let book3 = "https://www.sfbok.se/sites/default/files/styles/large/sfbok/sfbokbilder/726/726260.jpg?bust=1700227895&itok=AwB832Yh";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="In Universes by Emet North" />
         <img src={book2} alt="The Ministry of Time by Kaliane Bradley" />
         <img src={book3} alt="The Mercy of Gods by James S A Corey" />
      </div>      
   );
}