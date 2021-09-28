import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import clsx from 'clsx';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Draggable from 'react-draggable';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { BridgesContext } from '../../../state/bridgesContext';
import RenderGraph from './Graphs/RenderGraph';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

const BridgeCard = () => {
  const { detailsData, setDetailsData } = useContext(BridgesContext);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Draggable>
      <div className="detailsContainer">
        <Card className={detailsData.root}>
          <CardActionArea>
            <div className="closeArea">
              <div
                className="close_button"
                // className="closeButton"
                onKeyDown={e => {
                  console.log(e);
                }}
                onClick={() => setDetailsData(null)}
              >
                Close
              </div>
            </div>
            <div className="bridge-image">
              {detailsData.bridge_image ? (
                <CardMedia
                  id="card_media"
                  className={classes.media}
                  title="bridge_image"
                  image={detailsData.bridge_image}
                />
              ) : (
                <div className="no-bridge-image">
                  Bridge Image is Unavailiable
                </div>
              )}
            </div>
            <CardContent id="card_content">
              <Typography
                id="bridge_name_text"
                gutterBottom
                style={{ color: 'white' }}
                color="inherit"
                variant="h5"
                component="h2"
                width="100%"
              >
                <strong>
                  {' '}
                  <span id="bridge_name_intro"> Bridge name:</span>{' '}
                  {detailsData.bridge_site_name}
                </strong>
                <div clasName="graphDiv">
                  <RenderGraph data={detailsData} />
                </div>
              </Typography>
              <IconButton
                style={{ color: 'white' }}
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardContent>
          </CardActionArea>

          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
                <div className="bottom_info">
                  <div className="bottom_info_cols">
                    <p>
                      <span className="bottomInfoTags">Province:</span>{' '}
                      {detailsData.province}
                    </p>
                    <p>
                      <span className="bottomInfoTags">District:</span>{' '}
                      {detailsData.district}
                    </p>
                    <p>
                      <span className="bottomInfoTags">Bridge Type:</span>{' '}
                      {detailsData.type}
                    </p>
                    <p>
                      <span className="bottomInfoTags">Project Sub Stage:</span>{' '}
                      {detailsData.sub_stage}
                    </p>
                    <p>
                      <span className="bottomInfoTags">Project Stage:</span>{' '}
                      {detailsData.stage}
                    </p>
                  </div>
                  <div className="bottom_info_cols">
                    <p>
                      <span className="bottomInfoTags">
                        Estimate of People Served:
                      </span>{' '}
                      {detailsData.Individuals_directly_served}
                    </p>
                    <p>
                      <span className="bottomInfoTags">
                        AVG Households Served:
                      </span>{' '}
                      {detailsData.inc_income}
                    </p>
                    <p>
                      <span className="bottomInfoTags">
                        Economic Impact (RWF):
                      </span>{' '}
                      {detailsData.inc_income_rwf}
                    </p>
                    <p>
                      <span className="bottomInfoTags">
                        Economic Impact (USD):
                      </span>{' '}
                      {detailsData.inc_income_usd}
                    </p>
                  </div>
                </div>
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    </Draggable>
  );
};

export default BridgeCard;
