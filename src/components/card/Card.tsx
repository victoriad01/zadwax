interface Resource {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface CardProps {
  resource: Resource;
}

export const Card = ({ resource }: CardProps) => {
  return (
    <div className="min-w-[265.75px] h-[227px] mb-8 md:mb-0">
      <img src={resource.image} alt="data trend" className="w-full" />
      <div className="h-[100px] border-l-[1px] border-b-[1px]  border-r-[1px] p-4  ">
        <p className=" text-lg font-[500] leading-[28px]">{resource.title}</p>
        <p className="font-aeoniklight text-[12px] font-[400] leading-[18px]">
          {resource.description}
        </p>
      </div>
    </div>
  );
};
