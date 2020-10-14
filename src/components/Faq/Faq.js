import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Faq.css'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '100%',
    flexShrink: 0,
    fontFamily: 'Quantico',
    color: '#21d192',
    fontSize: '20px'
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    fontFamily: 'Quantico',
    color: '#fff',
    fontSize: '18px'
  },
}));

export default function Faq() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root} className="container mt-5 mb-5">
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{
        backgroundColor: '#343A40'
      }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: '#21d192' }} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header">
          <Typography className={classes.heading}>
           Where can I get my Crypt bonus card?
</Typography>
          {/* <Typography className={classes.secondaryHeading}>I am an accordion</Typography> */}
        </AccordionSummary>
        <AccordionDetails>
        <Typography className={classes.secondaryHeading}>
          Register for free on our website (until registration). The code you receive via e-mail you need to show at the box office, on the basis of which the employee issues you a Cineplexx bonus card. <br/><br />

Already have an online account on our site? In that case, there is no need to re-register. All you have to do is pick up your Cineplexx bonus card based on your date of birth and e-mail address the next time you visit the box office. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} style={{
        backgroundColor: '#343A40'
      }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: '#21d192' }} />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>How can I use my bonus points</Typography>
          {/* <Typography className={classes.secondaryHeading}>
            You are currently not an owner
          </Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.secondaryHeading}>
          You can exchange your points at the box office for free tickets or items from the food and beverage counter. 
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} style={{
        backgroundColor: '#343A40'
      }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: '#21d192' }} />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>How can I check the status of my bonus points?</Typography>
          {/* <Typography className={classes.secondaryHeading}>
            Filtering has been entirely disabled for whole web server
          </Typography> */}
        </AccordionSummary>
        <AccordionDetails>
        <Typography className={classes.secondaryHeading}>
          You can check the status of your bonus points online at any time . You need to select your name in the upper right corner and check the "Crypt bonus card" option to see the status of the collected points. 
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} style={{
        backgroundColor: '#343A40'
      }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: '#21d192' }}/>}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>What is the validity period of funds and points on my Crypt bonus card?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography className={classes.secondaryHeading}>
          The amount paid on the Crypt bonus card is valid for 18 months from the date of payment. After 18 months, the discounts associated with the Cineplexx bonus card are no longer valid. The remaining amount cannot be returned to the cardholder, but can be used as a non-cash means of ticket payment (without discount) for the next 60 months. After the expiration of those 5 years, the funds on the card cease to be valid. <br/><br/>
          Bonus points that you collect on the Crypt bonus card can be redeemed for a period of 18 months from the day they were collected. After 18 months, the points are deleted, however, points that are not older than 18 months remain on the card and can be used until they expire.<br/><br/>
          Funds on the card (money and points) cannot be redeemed, nor can they be transferred to another user's Cineplexx bonus card. 
          </Typography>
        </AccordionDetails>
      </Accordion>

      
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} style={{
        backgroundColor: '#343A40'
      }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: '#21d192' }} />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography className={classes.heading}>Do you take credit cards?</Typography>
          {/* <Typography className={classes.secondaryHeading}>
            Filtering has been entirely disabled for whole web server
          </Typography> */}
        </AccordionSummary>
        <AccordionDetails>
        <Typography className={classes.secondaryHeading}>
          Yes, we take credit and debit cards online, at the box office and in the Crypt Club.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} style={{
        backgroundColor: '#343A40'
      }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: '#21d192' }} />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
        >
          <Typography className={classes.heading}>Can I bring in outside food and drink?</Typography>
          {/* <Typography className={classes.secondaryHeading}>
            Filtering has been entirely disabled for whole web server
          </Typography> */}
        </AccordionSummary>
        <AccordionDetails>
        <Typography className={classes.secondaryHeading}>
          We kindly ask that you refrain from bringing outside food and drink into the cinema. We have an extensive food and drinks menu for you to choose from.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')} style={{
        backgroundColor: '#343A40'
      }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: '#21d192' }} />}
          aria-controls="panel7bh-content"
          id="panel7bh-header"
        >
          <Typography className={classes.heading}>How do I get in contact with you?</Typography>
          {/* <Typography className={classes.secondaryHeading}>
            Filtering has been entirely disabled for whole web server
          </Typography> */}
        </AccordionSummary>
        <AccordionDetails>
        <Typography className={classes.secondaryHeading}>
          Our call centre is now back open, so you can call us on + 65 1327 172 or get in contact via email on customer.services@crypt.com
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')} style={{
        backgroundColor: '#343A40'
      }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: '#21d192' }} />}
          aria-controls="panel8bh-content"
          id="panel8bh-header"
        >
          <Typography className={classes.heading}>What is Marvel night?</Typography>
          {/* <Typography className={classes.secondaryHeading}>
            Filtering has been entirely disabled for whole web server
          </Typography> */}
        </AccordionSummary>
        <AccordionDetails>
        <Typography className={classes.secondaryHeading}>
          Marvel night is the event dedicated to the release of superhero, action movies and movies realized by the comics of Marvel studio, when visitors can get double pains with a bonus card and various gifts.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')} style={{
        backgroundColor: '#343A40'
      }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: '#21d192' }} />}
          aria-controls="panel9bh-content"
          id="panel9bh-header"
        >
          <Typography className={classes.heading}>What is DC night?</Typography>
          {/* <Typography className={classes.secondaryHeading}>
            Filtering has been entirely disabled for whole web server
          </Typography> */}
        </AccordionSummary>
        <AccordionDetails>
        <Typography className={classes.secondaryHeading}>
          DC night is the event dedicated to the release of superhero, action movies and movies realized by the comics of DC studio, when visitors can get double pains with a bonus card and various gifts.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')} style={{
        backgroundColor: '#343A40'
      }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: '#21d192' }} />}
          aria-controls="panel10bh-content"
          id="panel10bh-header"
        >
          <Typography className={classes.heading}>What should I do in case of loss or damage of the Crypt bonus card?</Typography>
          {/* <Typography className={classes.secondaryHeading}>
            Filtering has been entirely disabled for whole web server
          </Typography> */}
        </AccordionSummary>
        <AccordionDetails>
        <Typography className={classes.secondaryHeading}>
          Please inform us about the loss or damage of the card by e-mail at bonuscard@crypt.com . You need to send us your Crypt bonus card number, which is why we advise you to keep that number separate from the card itself. After losing the Crypt bonus card, the owner will receive a new card after the given number of the lost card and the identification document. Funds and bonus points will be transferred from the old to the new Crypt bonus card, with the amount reduced by manipulative costs in the amount of 250 dinars. The new Crypt bonus card will be valid for the same period as the lost card. 
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
