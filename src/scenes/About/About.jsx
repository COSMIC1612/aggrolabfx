import React from "react";
import { Card, CardContent, Typography, Grid, styled } from "@mui/material";
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";

const Section = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const Heading = styled(Typography)({
  fontWeight: "bold",
  marginBottom: (theme) => theme.spacing(2),
  fontSize: 40,
});
const CardHeading = styled(Typography)({
  fontWeight: "bold",
  marginBottom: (theme) => theme.spacing(2),
  fontSize: 25,
});

const Text = styled(Typography)({
  fontSize: 20,

  marginBottom: (theme) => theme.spacing(2),
});

function About() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Section container spacing={2}>
      <Grid item xs={12}>
        <Card variant="outlined">
          <CardContent>
            <CardHeading
              style={{
                color: `${colors.blueAccent[500]}`,
              }}
              variant="h5"
              align="center"
            >
              Mission
            </CardHeading>

            <Text variant="body1" align="justify" sx={{ mt: 5 }}>
              Notre mission est de fournir une plateforme conviviale
              d'agrégation de données sur les options de change, afin de
              permettre aux traders et investisseurs de surveiller et d'analyser
              les fluctuations du marché en temps réel. Nous voulons aider nos
              utilisateurs à prendre des décisions d'investissement plus
              éclairées en leur fournissant des outils avancés d'analyse de
              données et de visualisation, ainsi qu'un accès facile aux
              informations clés sur les options de change. Notre objectif est de
              simplifier le processus d'agrégation de données pour que nos
              utilisateurs puissent se concentrer sur la prise de décisions
              informées et éclairées.
            </Text>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card variant="outlined">
          <CardContent>
            <CardHeading
              style={{
                color: `${colors.blueAccent[500]}`,
              }}
              variant="h5"
              align="center"
            >
              Project background and team members
            </CardHeading>
            <Text variant="body1" align="justify" sx={{ mt: 5 }}>
              Notre projet a été lancé en réponse au besoin croissant de données
              précises et en temps réel sur les options de change. Nous avons
              constaté que de nombreux traders et investisseurs n'avaient pas
              accès aux informations dont ils avaient besoin pour prendre des
              décisions éclairées, ce qui les laissait souvent dans l'obscurité
              quant à la direction à prendre.
              <Text variant="body1" align="justify" sx={{ mt: 5 }}>
                Nous avons rassemblé une équipe de professionnels de
                l'investissement et d'experts en technologies pour le
                développement de notre projet. Pour le front-end, nous avons
                travaillé avec{" "}
                <span
                  style={{
                    fontWeight: "bold",
                    color: `${colors.blueAccent[500]}`,
                  }}
                >
                  Mohamed Ben Rhaiem{" "}
                </span>
                qui a utilisé Javascript, React et ses frameworks. Pour le
                back-end, nous avons collaboré avec{" "}
                <span
                  style={{
                    fontWeight: "bold",
                    color: `${colors.blueAccent[500]}`,
                  }}
                >
                  {" "}
                  Achraf Kriaa{" "}
                </span>{" "}
                et
                <span
                  style={{
                    fontWeight: "bold",
                    color: `${colors.blueAccent[500]}`,
                  }}
                >
                  {" "}
                  Mohamed Kessentini{" "}
                </span>
                qui ont travaillé avec Python, Django et MySQL. Chacun des
                membres de notre équipe a apporté son expérience et son
                expertise pour faire avancer ce projet innovant.
              </Text>
              <Text variant="body1" align="justify" sx={{ mt: 5 }}>
                Le développement de cette application n'a pas été sans défis.
                Nous avons dû nous assurer que nos algorithmes étaient précis et
                que nos données étaient à jour en temps réel. Nous avons
                également travaillé dur pour rendre notre plateforme aussi
                conviviale et accessible que possible pour nos utilisateurs.
              </Text>
              <Text variant="body1" align="justify" sx={{ mt: 5 }}>
                Malgré les défis, nous sommes fiers du travail que nous avons
                accompli jusqu'à présent. Nous sommes convaincus que notre
                application web d'agrégation de données sur les options de
                change sera un outil précieux pour les traders et investisseurs,
                les aidant à prendre des décisions d'investissement plus
                éclairées et plus informées
              </Text>
            </Text>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card variant="outlined">
          <CardContent>
            <CardHeading
              style={{
                color: `${colors.blueAccent[500]}`,
              }}
              variant="h5"
              align="center"
            >
              Core Values
            </CardHeading>
            <Text variant="body1" align="justify" sx={{ mt: 5 }}>
              Les valeurs fondamentales qui guident notre projet sont la
              transparence, la collaboration et l'innovation. Nous sommes
              convaincus que ces valeurs sont essentielles pour créer notre
              projet qui soit à la fois utile et accessible.
            </Text>
            <Text variant="body1" align="justify" sx={{ mt: 5 }}>
              La transparence est au cœur de notre approche. Nous croyons que
              nos utilisateurs ont le droit de savoir comment leurs données sont
              collectées, traitées et utilisées. C'est pourquoi nous nous
              efforçons de rendre notre processus transparent et compréhensible
              pour tous. Nous voulons que nos utilisateurs aient une confiance
              totale dans notre plateforme et nous croyons que la transparence
              est la meilleure façon d'y parvenir.
            </Text>
            <Text variant="body1" align="justify" sx={{ mt: 5 }}>
              La collaboration est également une valeur importante pour nous.
              Nous sommes conscients que le développement d'une application web
              d'agrégation de données sur les options de change ne peut pas être
              accompli par une seule personne ou une seule équipe. C'est
              pourquoi nous avons rassemblé des professionnels de
              l'investissement et des experts en technologies pour travailler
              ensemble sur ce projet. Nous croyons que la collaboration est la
              clé pour créer une plateforme de qualité qui répond aux besoins
              des utilisateurs.
            </Text>
            <Text variant="body1" align="justify" sx={{ mt: 5 }}>
              Enfin, l'innovation est une valeur qui est au cœur de notre
              approche. Nous sommes déterminés à développer une application web
              qui utilise les dernières technologies pour fournir une expérience
              utilisateur optimale. Nous sommes conscients que les marchés
              financiers évoluent rapidement et que notre plateforme doit être
              en mesure de suivre ces changements. C'est pourquoi nous nous
              efforçons de rester à la pointe de l'innovation pour offrir à nos
              utilisateurs les meilleures fonctionnalités possibles.
            </Text>
          </CardContent>
        </Card>
      </Grid>
    </Section>
  );
}

export default About;
