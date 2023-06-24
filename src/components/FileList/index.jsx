import { Container } from './styles';
import { HiOutlineDocumentPlus } from 'react-icons/hi2';

export function FileList() {
    return (
        <Container>
            <ul>
                <li>
                    <div className='new'>
                        <HiOutlineDocumentPlus />
                    </div>
                    <div>
                        <p>New File</p>
                    </div>
                </li>
                <li>
                    <div></div>
                    <div><p>Currículo sem foto en.</p>
                    </div>
                </li>
                <li>
                    <div></div>
                    <div><p>Curriculo com foto</p>
                    </div>
                </li>
                <li>
                    <div></div>
                    <div><p>Em inglês</p>
                    </div>
                </li>
                <li>
                    <div></div>
                    <div><p>Em espanhol</p>
                    </div>
                </li>
            </ul>
        </Container>
    );
};
