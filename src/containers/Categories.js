import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 305,
  },
  media: {
    height: 300,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "40px",
        marginTop: "120px",
      }}
    >
      <Typography gutterBottom variant="h4" component="h2">
        Categories
      </Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          alignContent: "center",
          justifyContent: "center",
          paddingTop: "30px",
        }}
      >
        <Link to="/produt">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://www.dan-form.com/media/d5iiuemc/arch-chair-pebble-green-boucle-fabric-with-black-metal-legs-100205105-01-main.png?width=1920&mode=crop&heightratio=1"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Chairs
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>

        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://johnlewis.scene7.com/is/image/JohnLewis/sofa-carousel1-070922"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Sofas
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://www.oakworld.co.uk/wp-content/uploads/2019/02/BFO049-M-360x360.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Cupboards
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://cb2.scene7.com/is/image/CB2/DondraQueenBedSHS21_1x1/$web_plp_card_mobile$/210203123041/dondra-teak-queen-bed.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Beds
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}
