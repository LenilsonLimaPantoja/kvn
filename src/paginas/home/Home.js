import './Home.scss';
import { FaFacebookF, FaYoutube, FaFilm, FaCamera, FaWhatsapp, FaRegPlayCircle } from "react-icons/fa";
import { FaInstagram, FaVideo, FaPanorama } from "react-icons/fa6";
import { LiaMapSolid } from "react-icons/lia";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsCameraReelsFill } from "react-icons/bs";

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
                        <div className='card'>
                            <div className='imagem'>
                                <img src='https://kvn.marketing/wp-content/uploads/2023/04/engenharia-kvn-1-1536x1021.webp' alt='Construção civil' />
                            </div>
                            <div className='textos'>
                                <h2>Construção Civil</h2>
                                <p>A filmagem com drone na construção civil é crucial para monitorar os progressos, avaliar o local de forma abrangente e otimizar o planejamento.</p>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='imagem'>
                                <img src='https://kvn.marketing/wp-content/uploads/2023/04/imobiliario-kvn-1-1536x1021.webp' alt='Mercado Imobiliário' />
                            </div>
                            <div className='textos'>
                                <h2>Mercado Imobiliário</h2>
                                <p>No mercado imobiliário, a filmagem com drone desempenha um papel essencial ao apresentar propriedades de maneira envolvente.</p>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='imagem'>
                                <img src='https://kvn.marketing/wp-content/uploads/2023/04/publicitario-kvn-1-1536x1021.webp' alt='Marketing e Publicidade' />
                            </div>
                            <div className='textos'>
                                <h2>Marketing e Publicidade</h2>
                                <p>Estratégica na publicidade, a filmagem com drone adiciona uma dimensão dinâmica, atraindo e retendo a atenção do público.</p>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='imagem'>
                                <img src='https://kvn.marketing/wp-content/uploads/2023/04/institucional-kvn-1-1536x1021.webp' alt='Imagens Aéreas' />
                            </div>
                            <div className='textos'>
                                <h2>Imagens Aéreas</h2>
                                <p>Atuamos com o melhor para entregar a solução que você precisa. Filmagem com Drone em Goiânia. Atendimento rápido. Faça um orçamento.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section-3'>
                    <h1>Empresa de Filmagem com Drone em Goiânia.</h1>
                    <p>Atuamos com o Melhor do Mercado para Entregar a Solução Que Você Precisa.</p>
                    <button>
                        <FaWhatsapp />
                        <span>Faça um orçamento rápido</span>
                    </button>
                </section>
                <section className='section-4'>
                    <div className='section-4-textos'>
                        <h1>Conheça nosso Trabalho.</h1>
                        <p>Filmagem com Drone de Última Geração. Empresa Recomendada em Goiânia.</p>
                    </div>
                    <div className='videos'>
                        <div style={{
                            background: "url('https://kvn.marketing/wp-content/uploads/2024/03/construcao.webp')",
                            backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'

                        }}>
                            <FaRegPlayCircle />
                        </div>
                        <div style={{
                            background: "url('https://kvn.marketing/wp-content/uploads/2024/03/prots.webp')",
                            backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'

                        }}>
                            <FaRegPlayCircle />
                        </div>
                        <div style={{
                            background: "url('https://kvn.marketing/wp-content/uploads/2024/03/bee.webp')",
                            backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'

                        }}>
                            <FaRegPlayCircle />
                        </div>
                        <div style={{
                            background: "url('https://kvn.marketing/wp-content/uploads/2024/03/sobrado.webp')",
                            backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'

                        }}>
                            <FaRegPlayCircle />
                        </div >
                        <div style={{
                            background: "url('https://kvn.marketing/wp-content/uploads/2025/01/colombina.webp')",
                            backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'

                        }}>
                            <FaRegPlayCircle />
                        </div>
                        <div style={{
                            background: "url('https://kvn.marketing/wp-content/uploads/2025/01/volga-regras.webp')",
                            backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'

                        }}>
                            <FaRegPlayCircle />
                        </div>
                        <div style={{
                            background: "url('https://kvn.marketing/wp-content/uploads/2025/01/volga-blokset.webp')",
                            backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'

                        }}>
                            <FaRegPlayCircle />
                        </div>
                        <div style={{
                            background: "url('https://kvn.marketing/wp-content/uploads/2024/03/heinz.webp')",
                            backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'

                        }}>
                            <FaRegPlayCircle />
                        </div>
                        <div style={{
                            background: "url('https://kvn.marketing/wp-content/uploads/2024/03/alucentro.webp')",
                            backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'

                        }}>
                            <FaRegPlayCircle />
                        </div>
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
            </div >
        </div >
    )
}
export default Home;