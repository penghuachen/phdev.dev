const techStacksIcons = {
  'Shell Script': () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        width="40px"
        height="56px"
        x="40px"
        y="56px"
        viewBox="0 0 100 125"
        enable-background="new 0 0 100 100"
        xmlSpace="preserve"
      >
        <path
          className="dark:fill-white"
          d="M92.5,40H85V22.5c0-0.663-0.264-1.299-0.732-1.768l-15-15C68.799,5.263,68.163,5,67.5,5h-50C16.119,5,15,6.119,15,7.5V40  H7.5C6.119,40,5,41.119,5,42.5v35C5,78.881,6.119,80,7.5,80H15v12.5c0,1.381,1.119,2.5,2.5,2.5h65c1.381,0,2.5-1.119,2.5-2.5V80h7.5  c1.381,0,2.5-1.119,2.5-2.5v-35C95,41.119,93.881,40,92.5,40z M70,13.535L76.464,20H70V13.535z M20,10h45v15h15v15H20V10z M80,90H20  V80h60V90z M90,75H10V45h80V75z"
        />
        <path
          className="dark:fill-white"
          d="M48.75,62.5c0-2.757-2.243-5-5-5h-5c0-1.378,1.121-2.5,2.5-2.5h7.5v-5h-7.5c-4.136,0-7.5,3.364-7.5,7.5c0,2.757,2.243,5,5,5  h5c0,1.378-1.121,2.5-2.5,2.5h-7.5v5h7.5C45.386,70,48.75,66.636,48.75,62.5z"
        />
        <polygon
          className="dark:fill-white"
          points="56.25,62.5 61.25,62.5 61.25,70 66.25,70 66.25,62.5 66.25,57.5 66.25,50 61.25,50 61.25,57.5 56.25,57.5 56.25,50   51.25,50 51.25,57.5 51.25,62.5 51.25,70 56.25,70 "
        />
      </svg>
    )
  },
}

const TechStacks = ({ techStacks }) => {
  return (
    <>
      <h3 className="mb-2 text-lg font-bold">使用技術：</h3>
      <ul className="flex flex-wrap items-center ">
        {techStacks.map((tech: string) => (
          <li key={tech} className="item-center flex">
            <div>
              {techStacksIcons[tech] ? (
                techStacksIcons[tech]()
              ) : (
                <span className="text-xl">{tech},</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default TechStacks
