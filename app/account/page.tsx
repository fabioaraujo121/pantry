"use client"
import styles from '../page.module.css'
import prisma from '../../lib/prisma';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';


export default function About() {
  return (
    <main className={styles.main}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Typography color="text.primary">O que é?</Typography>
      </Breadcrumbs>
      <Typography variant="h1">
        Por quê?
      </Typography>
      <Typography variant="body1" sx={{textAlign: 'justify'}}>
        O desperdício de alimentos é um problema sério em todo o mundo, inclusive no Brasil.
        Estima-se que cerca de um terço dos alimentos produzidos no mundo seja perdido ou desperdiçado anualmente, o que equivale a cerca de 1,3 bilhão de toneladas.
        No Brasil, o desperdício de alimentos em nossas casas é alarmante e tem impactos significativos em termos de meio ambiente, economia e segurança alimentar.
      </Typography>
      <Typography variant="body1" sx={{textAlign: 'justify'}}>
        De acordo com a Embrapa (Empresa Brasileira de Pesquisa Agropecuária), as famílias brasileiras jogam fora cerca de 40% dos alimentos que compram, o que equivale a 128,8 kg por pessoa por ano.
        Isso significa que, em média, cada família brasileira desperdiça cerca de R$ 1.000,00 por ano em comida que acaba indo para o lixo.
        Esse valor pode ser ainda maior em famílias de maior poder aquisitivo.
      </Typography>
      <Typography variant="body1" sx={{textAlign: 'justify'}}>
        Além do impacto financeiro direto, o desperdício de alimentos também tem impactos negativos no meio ambiente.
        Isso porque a produção, transporte e descarte de alimentos geram emissões de gases de efeito estufa, além de contribuírem para o desmatamento e a escassez de recursos naturais.
        Além disso, o desperdício de alimentos contribui para a insegurança alimentar, já que muitas pessoas não têm acesso suficiente a alimentos nutritivos e saudáveis.
      </Typography>
      <Typography variant="body1" sx={{textAlign: 'justify'}}>
        Para reduzir o desperdício de alimentos em nossas casas, é importante adotar medidas simples, como planejar as compras de alimentos, armazenar os alimentos corretamente e aproveitar as sobras.
        Além disso, é fundamental repensar nossos hábitos de consumo e valorizar os alimentos de forma mais consciente.
      </Typography>
      <Typography variant="body1" sx={{textAlign: 'justify'}}>
        Em resumo, o desperdício de alimentos é um problema significativo em nossas casas e tem impactos negativos em termos de meio ambiente, economia e segurança alimentar.
        É importante que cada um de nós adote medidas para reduzir o desperdício de alimentos em nossas casas, contribuindo para um mundo mais sustentável e justo.
      </Typography>

      <Button variant="outlined" href="#outlined-buttons">
        Entrar
      </Button>
    </main>
  )
}
