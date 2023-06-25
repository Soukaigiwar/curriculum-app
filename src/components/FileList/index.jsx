import { Link } from "react-router-dom";

import { Container } from './styles';
import { HiOutlineDocumentPlus } from 'react-icons/hi2';

export function FileList() {
    return (
        <Container>
            <ul>
                <li>
                    <Link to="new">
                        <div className='new'>
                            <HiOutlineDocumentPlus />
                        </div>
                        <div>
                            <p>New File</p>
                        </div>
                    </Link>
                </li>

                <li>
                    <Link to="/details/1">
                        <div></div>
                        <div><p>Currículo sem foto en.</p>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="details/2">
                        <div></div>
                        <div><p>Curriculo com foto</p>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="details/4">
                        <div></div>
                        <div><p>Em inglês</p>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="details/16">
                        <div></div>
                        <div><p>Em espanhol</p>
                        </div>
                    </Link>
                </li>
            </ul>
        </Container>
    );
};
