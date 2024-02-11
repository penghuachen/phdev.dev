import projectsData from '@/data/projectsData'
// @ts-ignore
import toolsData from '@/data/toolsData'
import Card from '@/components/Card'
// @ts-ignore
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            專案/工具
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            過往曾開發過的專案、 Side Projects 或小工具
          </p>
        </div>
        <div className="container">
          <div className="block pt-6">
            <h3 className="title text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-3xl md:leading-14">
              專案 Projects
            </h3>
            <div className="projects -m-4  flex flex-wrap pt-6">
              {projectsData.length ? (
                projectsData.map((d) => (
                  <Card
                    key={d.title}
                    title={d.title}
                    description={d.description}
                    imgSrc={d.imgSrc}
                    href={d.href}
                    techStacks={d.techStacks}
                  />
                ))
              ) : (
                <div className="m-4 flex h-60 w-full items-center justify-center rounded-md border-2 border-gray-200 border-opacity-60 text-4xl font-bold text-white dark:border-gray-700">
                  <p className="text-gray-900 dark:text-gray-100">Coming Soon...</p>
                </div>
              )}
            </div>
          </div>

          <div className="block pt-6">
            <h3 className="title text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-3xl md:leading-14">
              Side Projects
            </h3>
            <div className="side-projects -m-4  flex flex-wrap pt-6">
              {projectsData.length ? (
                projectsData.map((d) => (
                  <Card
                    key={d.title}
                    title={d.title}
                    description={d.description}
                    imgSrc={d.imgSrc}
                    href={d.href}
                    techStacks={d.techStacks}
                  />
                ))
              ) : (
                <div className="m-4 flex h-60 w-full items-center justify-center rounded-md border-2 border-gray-200 border-opacity-60 text-4xl font-bold text-white dark:border-gray-700">
                  <p className="text-gray-900 dark:text-gray-100">Coming Soon...</p>
                </div>
              )}
            </div>
          </div>

          <div className="block pt-6">
            <h3 className="title text-xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-3xl md:leading-14">
              小工具 Tools
            </h3>

            <div className="tools -m-4  flex flex-wrap pt-6">
              {toolsData.length ? (
                toolsData.map((d) => (
                  <Card
                    key={d.title}
                    title={d.title}
                    description={d.description}
                    imgSrc={d.imgSrc}
                    href={d.href}
                    techStacks={d.techStacks}
                  />
                ))
              ) : (
                <div className="m-4 flex h-60 w-full items-center justify-center rounded-md border-2 border-gray-200 border-opacity-60 text-4xl font-bold text-white dark:border-gray-700">
                  <p className="text-gray-900 dark:text-gray-100">Coming Soon...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
