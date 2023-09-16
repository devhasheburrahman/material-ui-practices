import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { useState } from "react"

export const MuAccordion = () => {
    const [expended, setExpended] = useState<string | false>(false)

    const handleChange = (isExpanded: boolean, panel: string) => {
        setExpended(isExpanded ? panel : false)

    }

    return (
        <div>
            <Accordion expanded={expended === 'panel1'} onChange={(event, isExpanded) => handleChange(isExpanded, 'panel1')}>
                <AccordionSummary id="panel1-header"
                    aria-controls="panel1-control" expandIcon={<ExpandMoreIcon />}
                >
                    <Typography>Accordion 1 </Typography>
                </AccordionSummary>
                <AccordionDetails> <Typography> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem ea neque iure adipisci, dolor quam provident officia maxime sequi fugiat at reprehenderit deleniti ut dignissimos nulla! Blanditiis quisquam porro nostrum.</Typography></AccordionDetails>
            </Accordion>
            <Accordion expanded={expended === 'panel2'} onChange={(event, isExpanded) => handleChange(isExpanded, 'panel2')}>
                <AccordionSummary id="panel2-header"
                    aria-controls="panel2-control" expandIcon={<ExpandMoreIcon />}
                >
                    <Typography>Accordion 1 </Typography>
                </AccordionSummary>
                <AccordionDetails> <Typography> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem ea neque iure adipisci, dolor quam provident officia maxime sequi fugiat at reprehenderit deleniti ut dignissimos nulla! Blanditiis quisquam porro nostrum.</Typography></AccordionDetails>
            </Accordion>
            <Accordion expanded={expended === "panel3"} onChange={(event, isExpanded) => handleChange(isExpanded, 'panel3')}>
                <AccordionSummary id="panel3-header"
                    aria-controls="panel3-control" expandIcon={<ExpandMoreIcon />}
                >
                    <Typography>Accordion 1 </Typography>
                </AccordionSummary>
                <AccordionDetails> <Typography> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem ea neque iure adipisci, dolor quam provident officia maxime sequi fugiat at reprehenderit deleniti ut dignissimos nulla! Blanditiis quisquam porro nostrum.</Typography></AccordionDetails>
            </Accordion>

        </div>
    )
}
