const techStacksIcons = {
  'Shell Script': '/static/images/icons/techStacks/shell-script-icon.svg',
}

const TechStacks = ({ techStacks }) => {
  return (
    <>
      <h3 className="mb-2 text-lg font-bold">使用技術：</h3>
      <ul className="flex flex-wrap items-center ">
        {techStacks.map((tech: string) => (
          <li key={tech} className="item-center flex">
            <div>
              <img src={techStacksIcons[tech]} alt={tech} className="mr-2 h-14 w-10 align-middle" />
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default TechStacks
