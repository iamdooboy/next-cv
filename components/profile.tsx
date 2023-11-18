import { ProfileDataProps } from '@/data/profile'

export const Profile: React.FC<ProfileDataProps> = ({ title, items }) => {
  return (
    <section className='my-14 text-sm'>
      <h3 className='mb-6'>{title}</h3>
      <div className='flex flex-col gap-6'>
        {items.map((item, index) => {
          return (
            <div className='flex' key={index}>
              <div className='mr-8 max-w-[100px] w-full text-slate-400 dark:text-slate-400'>
                {item.date}
              </div>
              <div className='flex flex-col flex-1'>
                <h4>{item.title}</h4>
                <p className='text-slate-600 dark:text-gray-400'>
                  {item.subTitle}
                </p>
                {item.description ? (
                  <p className='text-slate-600 dark:text-gray-400 mt-2'>
                    {item.description}
                  </p>
                ) : null}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
