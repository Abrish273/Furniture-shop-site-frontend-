import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 305,
  },
  media: {
    height: 450,
  },
});

const ProductComponent = () => {
  const classes = useStyles();

  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;

    return (
      <div className="four column wide" key={id}>
        <Link to={`/product/${id}`}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                style={{ width: "100%" }}
                className={classes.media}
                image={image}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {title}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  $ {price}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  {category}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;

/*
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 305,
  },
  media: {
    height: 450,
  },
});

export default function CategorieA() {
  const classes = useStyles();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div>
        <Carousel responsive={responsive}>
          <Link to={`/product/${id}`}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={image}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {title}
                  </Typography>
                  <br />
                  <Typography gutterBottom variant="h5" component="h2">
                    $ {price}
                  </Typography>
                  <br />
                  <Typography gutterBottom variant="h5" component="h2">
                    {category}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </Carousel>
      </div>
    );
  });
  return <>{renderList}</>;
}
*/
/*import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 305,
  },
  media: {
    height: 450,
  },
});

const ProductComponent = () => {
  const classes = useStyles();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
  const { id, title, image, price, category } = product;

    return (
      <div key={id}>
        <Carousel responsive={responsive}>
          <Link to={`/product/${id}`}>
            <Card>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={image}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {title}
                  </Typography>
                  <br />
                  <Typography gutterBottom variant="h5" component="h2">
                    $ {price}
                  </Typography>
                  <br />
                  <Typography gutterBottom variant="h5" component="h2">
                    {category}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </Carousel>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
*/
