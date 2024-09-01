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
    <div className="w-full lg:w-[265.75px] 2xl:min-w-[265.75px] mb-8 lg:mb-0">
      <img src={resource.image} alt="data trend" className="w-full" />
      <div className="h-[100px] border-b-[1px] border-l-[1px] border-r-[1px]  p-4 rounded-br-xl rounded-bl-xl  ">
        <p className=" text-lg font-[500] text-gray-700">{resource.title}</p>
        <p className="font-aeoniklight text-[12px] font-[400] leading-[18px] text-paragraph">
          {resource.description}
        </p>
      </div>
    </div>
  );
};
