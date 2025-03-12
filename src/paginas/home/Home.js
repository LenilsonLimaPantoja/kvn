import './Home.scss';
import { FaFacebookF, FaYoutube, FaFilm, FaCamera, FaWhatsapp, FaRegPlayCircle } from "react-icons/fa";
import { FaInstagram, FaPanorama, FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsCameraReelsFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import logo from '../../assets/logo.png';
const videos = [
    {
        id: 1, url: 'https://kvn.marketing/wp-content/uploads/2024/03/construcao.webp',
        link: 'https://www.instagram.com/reel/DGuGc97xVXf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
    },
    {
        id: 2, url: 'https://kvn.marketing/wp-content/uploads/2024/03/prots.webp',
        link: 'https://www.instagram.com/reel/DGuGc97xVXf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
    },
    {
        id: 3, url: 'https://kvn.marketing/wp-content/uploads/2024/03/bee.webp',
        link: 'https://www.instagram.com/reel/DGuGc97xVXf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
    },
    {
        id: 4, url: 'https://kvn.marketing/wp-content/uploads/2024/03/sobrado.webp',
        link: 'https://www.instagram.com/reel/DGuGc97xVXf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
    },
    {
        id: 5, url: 'https://kvn.marketing/wp-content/uploads/2025/01/colombina.webp',
        link: 'https://www.instagram.com/reel/DGuGc97xVXf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
    },
    {
        id: 6, url: 'https://kvn.marketing/wp-content/uploads/2025/01/volga-regras.webp',
        link: 'https://www.instagram.com/reel/DGuGc97xVXf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
    },
    {
        id: 7, url: 'https://kvn.marketing/wp-content/uploads/2025/01/volga-blokset.webp',
        link: 'https://www.instagram.com/reel/DGuGc97xVXf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
    },
    {
        id: 8, url: 'https://kvn.marketing/wp-content/uploads/2024/03/heinz.webp',
        link: 'https://www.instagram.com/reel/DGuGc97xVXf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
    },
    {
        id: 9, url: 'https://kvn.marketing/wp-content/uploads/2024/03/alucentro.webp',
        link: 'https://www.instagram.com/reel/DGuGc97xVXf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
    }
];

const cards = [
    {
        id: 1,
        url: 'https://kvn.marketing/wp-content/uploads/2023/04/engenharia-kvn-1-1536x1021.webp',
        h2: 'Construção Civil', p: 'A filmagem com drone na construção civil é crucial para monitorar os progressos, avaliar o local de forma abrangente e otimizar o planejamento.'
    },
    {
        id: 2,
        url: 'https://kvn.marketing/wp-content/uploads/2023/04/imobiliario-kvn-1-1536x1021.webp',
        h2: 'Mercado Imobiliário',
        p: 'No mercado imobiliário, a filmagem com drone desempenha um papel essencial ao apresentar propriedades de maneira envolvente.'
    },
    {
        id: 3,
        url: 'https://kvn.marketing/wp-content/uploads/2023/04/publicitario-kvn-1-1536x1021.webp',
        h2: 'Marketing e Publicidade',
        p: 'Estratégica na publicidade, a filmagem com drone adiciona uma dimensão dinâmica, atraindo e retendo a atenção do público.'
    },
    {
        id: 4,
        url: 'https://kvn.marketing/wp-content/uploads/2023/04/institucional-kvn-1-1536x1021.webp',
        h2: 'Imagens Aéreas',
        p: 'Atuamos com o melhor para entregar a solução que você precisa. Filmagem com Drone em Mato Grosso do Sul. Atendimento rápido. Faça um orçamento.'
    }
];

const sociais = (link) => {
    window.open(link, '_blank');
};
const email = (link) => {
    window.location.href = link;
};
const Home = () => {
    return (
        <div className='container-home'>
            <div className='home-header'>
                <p className='header-portfolio'>Portfólio</p>
                <img className='header-img' src={logo} alt='Logo KVN' />
                <div className='header-btns'>
                    <button onClick={() => sociais('https://www.facebook.com/kvndrone?mibextid=ZbWKwL')}>
                        <FaFacebookF />
                    </button>
                    <button onClick={() => sociais('https://www.instagram.com/kvndrone')}>
                        <FaInstagram />
                    </button>
                    <button onClick={() => sociais('https://www.youtube.com/@kvndrone')}>
                        <FaYoutube />
                    </button>
                </div>
            </div>
            <div className='body-home'>
                <section className='section-1'>
                    <div className='section-1-textos'>
                        <p>Produção de Vídeos</p>
                        <h1>Serviço de Fotografia e Filmagem com Drone em Campo Grande - MS</h1>
                        <p>Explorando novos horizontes, vendo o mundo de outra perspectiva</p>
                    </div>
                    <div className='section-1-contato'>
                        <button onClick={() => sociais('https://wa.me/5567992713094')}>
                            <div></div>
                            <FaWhatsapp />
                            <span>
                                Faça um orçamento rápido
                            </span>
                        </button>

                        <button onClick={() => email('tel:+5567982143134')}>
                            <div></div>
                            <BsFillTelephoneFill />
                            <span>
                                Ligue agora (67) 9 9271-3094
                            </span>
                        </button>
                    </div>
                    <div className='opcoes'>
                        <div>
                            <FaFilm />
                            <span>Vídeos em 4K</span>
                        </div>

                        <div>
                            <FaCamera />
                            <span>Fotos em 48MP</span>
                        </div>

                        <div>
                            <FaPanorama />
                            <span>Imagens Panorâmicas</span>
                        </div>

                        <div>
                            <BsCameraReelsFill />
                            <span>Cenas Cinematográficas</span>
                        </div>
                    </div>
                </section>
                <section className='section-2'>
                    <div className='section-2-textos'>
                        <h1>Temos a Solução Completa em Imagem Aérea para o seu Negócio</h1>
                        <p>Somos Especialistas em Filmagem internas e externas com Drone</p>
                    </div>
                    <div className='section-2-cards'>
                        {cards?.map((item) => (
                            <div className='card' key={item?.id}>
                                <div className='imagem'>
                                    <img src={item?.url} alt={item?.h2} />
                                </div>
                                <div className='textos'>
                                    <h2>{item?.h2}</h2>
                                    <p>{item?.p}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section className='section-3'>
                    <h1>Empresa de Filmagem com Drone em Campo Grande/MS e região</h1>
                    <p>Atuamos com o Melhor do Mercado para Entregar a Solução Que Você Precisa</p>
                    <button onClick={() => sociais('https://wa.me/5567992713094')}>
                        <FaWhatsapp />
                        <span>Faça um orçamento rápido</span>
                    </button>
                </section>
                <section className='section-4'>
                    <div className='section-4-textos'>
                        <h1>Conheça nosso Trabalho!</h1>
                        <p>Filmagem com Drones de Última Geração, homologados na Anac e Anatel</p>
                    </div>
                    <div className='videos'>
                        {videos?.map((item) => (
                            <div
                            onClick={()=> sociais(item.link)}
                                key={item?.id}
                                style={{
                                    background: `url('${item?.url}')`,
                                    backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'

                                }}>
                                <FaRegPlayCircle />
                            </div>
                        ))}
                    </div >
                </section >
                <section className='section-5'>
                    <h1>Eventos em geral | Ensaios | Esportes |
                    Serviços imobiliários | Turismo</h1>
                    <p>Tudo isso e um pouco mais...</p>
                    <button onClick={() => sociais('https://wa.me/5567992713094')}>
                        <FaWhatsapp />
                        <span>Faça um orçamento rápido</span>
                    </button>
                </section>
                <section className='section-6'>
                    <div className='section-6-left'>
                        <h1>Trabalhamos com Imagens Aéreas em Alta Qualidade</h1>
                        <p>
                            Contamos com uma Equipe Altamente Capacitada
                            <br />
                            para a Execução dos Serviços.
                        </p>
                        <button onClick={() => sociais('https://wa.me/5567992713094')}>
                            Conheça nossos serviços
                        </button>
                    </div>
                    <img src='https://kvn.marketing/wp-content/uploads/2024/09/drone-avata-kvn-marketing2-1024x615.webp' />
                </section>
                <section className='section-7'>
                    <h1>Filmagem com Drone. Contrate Agora.</h1>
                    <p className='local'>
                        <FaLocationDot />
                        <span>Atendimento em Campo Grande - MS e região</span>
                    </p>
                    <div className='section-7-btns'>
                        <button onClick={() => sociais('https://wa.me/5567992713094')}>
                            <FaWhatsapp />
                            <span>
                                Faça um orçamento rápido
                            </span>
                        </button>

                        <button>
                            <BsFillTelephoneFill />
                            <span>
                                Ligue agora (67) 9 9271-3094
                            </span>
                        </button>
                    </div>
                    <p className='email' onClick={() => email('mailto:kvnbrvo@gmail.com?subject=Assunto do E-mail&body=Corpo do E-mail')}>
                        <MdEmail />
                        <span>kvnbrvo@gmail.com</span>
                    </p>
                </section>
                <section className='section-8'>
                    <img src={logo} alt='Logo KVN' />
                    <span>Copyright © 2025 – Todos os direitos reservados.</span>
                </section>
            </div >
        </div >
    )
}
export default Home;