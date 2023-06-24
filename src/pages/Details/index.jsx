import { Container, Side, Content } from './styles';

import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Footer } from '../../components/Footer';

export function Details() {

  return (
    <Container>
      <Header />
      <div className="curriculum">
        <Side>
          <ul>
            <li>Contact</li>
            <p>sergiomello@gmail.com</p>
            <p>+351 928158624</p>

            <li>Links</li>
            <p>bit.ly/linkedinSHM</p>
            <p>github.com/Soukaigiwar</p>

            <li>Main skills</li>
            <p>Redação</p>
            <p>Controle de Qualidade</p>
            <p>Foco no Cliente</p>

            <li>Certifications</li>
            <p>Basecamp 42 SP</p>
            <p>Fullstack Dev - DIO</p>
            <p>.Net Dev - DIO</p>
            <p>Des Mobile Nativo Android</p>

            <li>Programming<br />Languages and Tools</li>
          </ul>
        </Side>

        <Content>
          <Section label="Sergio Henrique Pedroso Mello"><p>Developer | Frontend | JavaScript | React </p>
            <p>Guimarães - Braga - Portugal </p>
          </Section>
          <h2>Summary</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus sed voluptatum culpa nemo perspiciatis animi fugit nisi cum expedita deleniti eligendi neque voluptates reprehenderit ad ipsam, molestias quod deserunt sunt!deleniti eligendi neque voluptates reprehenderit ad ipsam, molestias quod deserunt sunt!deleniti eligendi neque voluptates reprehenderit ad ipsam, molestias quod deserunt sunt!
          Magnam harum iste id error sunt repellat sit mollitia. Cum deserunt amet totam nulla, at optio quaerat fugiat voluptatem, sapiente ut sint, voluptas explicabo. Ex praesentium labore ad culpa animi!
          Non quod, repudiandae amet, nostrum asperiores quas aliquid voluptates rerum officiis fuga tempora odio commodi? Quam cumque inventore repudiandae consectetur consequatur deleniti quasi in unde. Perferendis quam non necessitatibus veritatis.</p>
        </Content>
      </div>
      <Footer />
    </Container>
  );
};
