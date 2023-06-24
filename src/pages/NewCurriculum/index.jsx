import { Container, Content, Form } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { BackArrow } from "../../components/BackArrow";
import { Section } from "../../components/Section";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";
import { JobTag } from "../../components/JobTag";

export function NewCurriculum() {
    return (
        <Container>
            <Header />
            <Content>
                <Form>
                    <BackArrow />
                    <Section label="New Curriculum">
                        <Input
                            type="text"
                            placeholder="Full name"
                            required
                        />
                        <JobTag value="Developer" />
                        <JobTag value="Javascript" />
                        <JobTag value="React" />
                        <JobTag value="HTML5" />
                        <JobTag value="CSS3" />
                        <JobTag isNew placeholder="Job tags" />
                    </Section>
                    <Section label="Summary">
                        <Textarea
                            placeholder={"Summary"}
                            required
                        />
                    </Section>
                    
                    <Button label="submit" width={200}>teste</Button>
                </Form>
            </Content>
            <Footer />
        </Container>
    );
};
