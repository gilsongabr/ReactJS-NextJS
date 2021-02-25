import styled from 'styled-components'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import Layout from "../Layouts"
import styles from '../../../css/homepage.module.css'


const HomePage = () => { 
    
    useEffect(() => {
        let elements = document.querySelector(".parallax");
        M.Parallax.init(elements);
    }, [])    
    
    return(
        <div>
            <div className="parallax-container">
                <div className="parallax" ><img src="bgimage.jpg"/></div>
            </div>
            <div className="section white">
                <div className="row container">
                    <h2 className="header yellow-text text-darken-3">Web Hotel</h2>
                    <p className="grey-text text-darken-3 lighten-3 flow-text">O Web Hotel é um sistema ágil, intuitivo e seguro para o seu hotel. 
                    Um software fácil de utilizar, com as melhores funcionalidades e inovações do mercado. A solução ideal para o 
                    gerenciamento de seu hotel ou pousada.</p>
                
                    <h2 className={`red-text header center ${styles.marginh2}`}>Alguns benefícios da nossa plataforma</h2>

                    <div class="row">
                        <div class="col s3">
                            <div className ={`center promo promo-example hoverable ${styles.paddingpromo}`}>
                                <i className ="large material-icons blue-text text-darken-1">work</i>
                                <p className ="promo-caption blue-text text-darken-1">Gerencie sua hospedaria</p>
                                <p className ="light center blue-text text-darken-1">As decisões ficam mais fáceis quando as informações são precisas e estão acessíveis. Controle é a palavra chave.</p>
                            </div>
                        </div>
                        <div class="col s3">
                            <div className ={`center promo promo-example hoverable ${styles.paddingpromo}`}>
                                <i className ="large material-icons brown-text text-darken-2">assignment_turned_in</i>
                                <p className ="promo-caption brown-text text-darken-2">Reservas confiáveis</p>
                                <p className ="light center brown-text text-darken-2">Chega de overbookin! Suas reservas precisam de um sistema confiável para evitar problemas na hora do check-in. O Web hotel é perfeito para essas situações.</p>
                            </div>
                        </div>
                        <div class="col s3">
                            <div className ={`center promo promo-example hoverable ${styles.paddingpromo}`}>
                                <i className ="large material-icons green-text text-darken-2">brush</i>
                                <p className ="promo-caption green-text text-darken-2">Informações rápidas</p>
                                <p className ="light center green-text text-darken-2">As informações que você precisa rapidamente sem necessidade de gerar diversos relatórios para visualizar oque quer e agilize o processo para seus clientes e hóspedes</p>
                            </div>
                        </div>
                        <div class="col s3">
                            <div className ={`center promo promo-example hoverable ${styles.paddingpromo}`}>
                                <i className ="large material-icons orange-text text-darken-2">smartphone</i>
                                <p className ="promo-caption orange-text text-darken-2">Acesse onde estiver</p>
                                <p className ="light center orange-text text-darken-2">É possível acompanhar o funcionamento da sua hotelaria mesmo estando longe, viva a liberdade!</p>
                            </div>
                        </div>
                    </div>
                </div>            
            </div>
            
            <div className={styles.backimg1}>
                <div className={styles.divhomepage1}>
                    <div class="row">
                        <div className="col s12">
                            <h4 className={styles.h4homepage1}>Simplifique seu gerenciamento</h4>
                            <h6 className={styles.h6homepage1}>Controlar suas reservas, pagamentos, cadastro de clientes, caixa, indicadores e etc. Ainda é complicado para você? Com a ferramenta certa tudo isso pode ser bem mais simples! </h6>
                        </div>
                        
                        <div className={`col s6`} style={{paddingRight: "0px"}}>
                            <div className={`${styles.divhomepage2} ${styles.divcols6} hoverable`}>
                                <i className ="large material-icons yellow-text text-darken-2">language</i>
                                <div className={styles.divhomepage3}>
                                    <h6 className={styles.h6homepage2}>Sistema Web</h6>
                                    <p className={styles.phomepage1}>Não requer instalação ou servidores no local. </p>
                                </div>    
                            </div>
                        </div>
                        <div className={`col s6`} style={{paddingLeft: "0px"}}>
                            <div className={`${styles.divhomepage2} ${styles.divcols6} hoverable`}>
                                <i className ="large material-icons green-text text-darken-2">cloud</i>
                                <div className={styles.divhomepage3}>
                                    <h6 className={styles.h6homepage3}>Armazenamento de dados na nuvem</h6>
                                    <p className={styles.phomepage2}>Não se preocupe com o backup ou vírus. Nós cuidamos disso!</p>
                                </div>   
                            </div>
                        </div>  
                        <div className={styles.divhomepage4}>
                        <a className={`waves-effect waves-light btn-large ${styles.buttonhomepage}`}>CONTRATE AGORA</a>
                        </div> 
                    </div>                    
                </div>
            </div>
                  
        </div>  
    )
}

export default HomePage