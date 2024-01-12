import Accordion from "../components/Accordion";

function AccordionPages() {
  const items = [
    {
      id: "assafaff",
      label: "Can i use react in project ?",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium dolorum sapiente eos sunt aliquam, dignissimos architecto rem, saepe accusantium nobis libero ut.",
    },
    {
      id: "Afafas2",
      label: "Can i use javascript in project ?",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium dolorum sapiente eos sunt aliquam, dignissimos architecto rem, saepe accusantium nobis libero ut.",
    },
    {
      id: "asfafs21524",
      label: "Can i use CSS in project ?",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium dolorum sapiente eos sunt aliquam, dignissimos architecto rem, saepe accusantium nobis libero ut.",
    },
  ];

  return (
    <>
      <Accordion items={items}/>
    </>
  );
}

export default AccordionPages;
