import Nav from '../components/Nav';
import styles from '../styles/Contact.module.scss';
import Image from 'next/image';
import ImgHeader from '../components/ImgHeader';

export interface IProps {}

const Contact: React.FC<IProps> = (props) => {
  return (
    <div className={styles.container}>
      <Nav />
      <ImgHeader overlay="Contact" imgUrl="/static/ferrari_garage.jpg" />
      <main className={styles.main}>
        <div className={styles.formDescription}>
          <h1>Lorem Ipsum!</h1>
          <p>
            Voluptate nisi proident aliqua cupidatat magna incididunt
            adipisicing cillum labore esse exercitation ea. Culpa anim quis ex
            ut. Labore minim voluptate ullamco aute culpa.
          </p>
          <p>
            Sit nulla cupidatat labore incididunt officia laborum esse labore
            elit sit qui fugiat. Sit ad pariatur labore laboris irure in
            occaecat eu culpa. Eu consectetur ut do occaecat nostrud. Ea aliquip
            sint sit cillum anim quis proident cupidatat dolore. Amet amet ea
            ipsum aute eu consequat aliquip.
          </p>
        </div>
        <form className={styles.form}>
          <div>
            <label htmlFor="name">Full Name</label>
            <input placeholder="John Smith" type="text" id="name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input placeholder="john_smith@gmail.com" type="text" id="email" />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input placeholder="(408) 555-1234" type="text" id="phone" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              rows={10}
              placeholder="Write message here..."
              id="message"
            />
          </div>
          <button>Send Message</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
