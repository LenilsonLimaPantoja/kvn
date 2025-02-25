import './Home.scss';
import { FaFacebookF, FaYoutube, FaFilm, FaCamera, FaWhatsapp, FaRegPlayCircle } from "react-icons/fa";
import { FaInstagram, FaPanorama, FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsCameraReelsFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const videos = [
    { id: 1, url: 'https://kvn.marketing/wp-content/uploads/2024/03/construcao.webp' },
    { id: 2, url: 'https://kvn.marketing/wp-content/uploads/2024/03/prots.webp' },
    { id: 3, url: 'https://kvn.marketing/wp-content/uploads/2024/03/bee.webp' },
    { id: 4, url: 'https://kvn.marketing/wp-content/uploads/2024/03/sobrado.webp' },
    { id: 5, url: 'https://kvn.marketing/wp-content/uploads/2025/01/colombina.webp' },
    { id: 6, url: 'https://kvn.marketing/wp-content/uploads/2025/01/volga-regras.webp' },
    { id: 7, url: 'https://kvn.marketing/wp-content/uploads/2025/01/volga-blokset.webp' },
    { id: 8, url: 'https://kvn.marketing/wp-content/uploads/2024/03/heinz.webp' },
    { id: 9, url: 'https://kvn.marketing/wp-content/uploads/2024/03/alucentro.webp' }
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
]
const Home = () => {
    return (
        <div className='container-home'>
            <div className='home-header'>
                <p className='header-portfolio'>Portfólio</p>
                <img className='header-img' src='https://kvn.marketing/wp-content/webp-express/webp-images/uploads/2023/04/kvn-marketing-logo-2.png.webp' alt='Logo KVN' />
                <div className='header-btns'>
                    <button>
                        <FaFacebookF />
                    </button>
                    <button>
                        <FaInstagram />
                    </button>
                    <button>
                        <FaYoutube />
                    </button>
                </div>
            </div>
            <div className='body-home'>
                <section className='section-1'>
                    <div className='section-1-textos'>
                        <p>Produção de Vídeos</p>
                        <h1>Filmagem com Drone em Campo Grande</h1>
                        <p>Serviço de Fotografia e Filmagem com Drone em Campo Grande</p>
                    </div>
                    <div className='section-1-contato'>
                        <button>
                            <FaWhatsapp />
                            <span>
                                Faça um orçamento rápido
                            </span>
                        </button>

                        <button>
                            <BsFillTelephoneFill />
                            <span>
                                Ligue agora (62) 9 8127-2917
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
                        <h1>Temos a Solução Completa em Imagem Aérea para o seu Negócio.</h1>
                        <p>Somos Especialistas em Filmagem com Drone. Entre em Contato e faça um Orçamento.</p>
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
                    <h1>Empresa de Filmagem com Drone em Mato Grosso do Sul.</h1>
                    <p>Atuamos com o Melhor do Mercado para Entregar a Solução Que Você Precisa.</p>
                    <button>
                        <FaWhatsapp />
                        <span>Faça um orçamento rápido</span>
                    </button>
                </section>
                <section className='section-4'>
                    <div className='section-4-textos'>
                        <h1>Conheça nosso Trabalho.</h1>
                        <p>Filmagem com Drone de Última Geração. Empresa Recomendada em Mato Grosso do Sul.</p>
                    </div>
                    <div className='videos'>
                        {videos?.map((item) => (
                            <div
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
                    <h1>Filmagem com Drone. Filmagem Aérea Profissional.</h1>
                    <p>Fotografia com Drone. Serviços com Drone.</p>
                    <button>
                        <FaWhatsapp />
                        <span>Faça um orçamento rápido</span>
                    </button>
                </section>
                <section className='section-6'>
                    <div className='section-6-left'>
                        <h1>Imagem Aérea em Alta Qualidade.</h1>
                        <p>
                            Contamos com uma Equipe Altamente Capacitada
                            <br />
                            para a Execução dos Serviços.
                        </p>
                        <button>
                            Conheça nossos serviços
                        </button>
                    </div>
                    <img src='https://kvn.marketing/wp-content/uploads/2024/09/drone-avata-kvn-marketing2-1024x615.webp' />
                </section>
                <section className='section-7'>
                    <h1>Filmagem com Drone. Contrate Agora.</h1>
                    <p className='local'>
                        <FaLocationDot />
                        <span>Atendimento em Mato Grosso do Sul e em todo o estado de Campo Grande.</span>
                    </p>
                    <div className='section-7-btns'>
                        <button>
                            <FaWhatsapp />
                            <span>
                                Faça um orçamento rápido
                            </span>
                        </button>

                        <button>
                            <BsFillTelephoneFill />
                            <span>
                                Ligue agora (62) 9 8127-2917
                            </span>
                        </button>
                    </div>
                    <p className='email'>
                        <MdEmail />
                        <span>kevin@gmail.com</span>
                    </p>
                </section>
                <section className='section-8'>
                    <img src='https://kvn.marketing/wp-content/webp-express/webp-images/uploads/2023/04/kvn-marketing-logo-2.png.webp' />
                    <span>Copyright © 2025 – Todos os direitos reservados.</span>
                </section>
            </div >
        </div >
    )
}
export default Home;