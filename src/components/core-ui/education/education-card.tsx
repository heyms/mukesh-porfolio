import { makeStyles } from "@mui/styles";
import React, { useContext } from "react";
import eduImgBlack from "../../../assets/svg/education/eduImgBlack.svg";
import eduImgWhite from "../../../assets/svg/education/eduImgWhite.svg";
import { ThemeContext } from "../../../contexts/theme-context";
import { ContextValuesTypes, EducationCardPops } from "../../../types";
import "./education.css";
const Fade = require("react-reveal/Fade");

function EducationCard({
  id,
  institution,
  course,
  startYear,
  endYear,
}: EducationCardPops) {
  const { theme } = useContext<ContextValuesTypes>(ThemeContext);

  const useStyles = makeStyles((t) => ({
    educationCard: {
      backgroundColor: theme.quaternary,
    },
  }));

  const classes = useStyles();

  return (
    <Fade bottom>
      <div key={id} className={`education-card ${classes.educationCard}`}>
        <div className='educard-img' style={{ backgroundColor: theme.primary }}>
          <img
            src={theme.type === "light" ? eduImgBlack : eduImgWhite}
            alt=''
          />
        </div>
        <div className='education-details'>
          <h6 style={{ color: theme.primary }}>
            {startYear}-{endYear}
          </h6>
          <h4 style={{ color: theme.tertiary }}>{course}</h4>
          <h5 style={{ color: theme.tertiary }}>{institution}</h5>
        </div>
      </div>
    </Fade>
  );
}

export default EducationCard;
