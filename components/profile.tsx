import { ProfileDataProps } from '@/data/profile'

export const Profile: React.FC<ProfileDataProps> = ({ title, items }) => {
  return (
    <section className='my-14 text-sm'>
      <h3 className='mb-6'>{title}</h3>
      <div className='flex flex-col gap-6'>
        {items.map((item, index) => {
          return (
            <div className='flex' key={index}>
              <div className='mr-8 max-w-[100px] w-full text-muted-foreground'>
                {item.date}
              </div>
              <div className='flex flex-col flex-1'>
                <h4>{item.title}</h4>
                <p className='text-muted-foreground'>{item.subTitle}</p>
                {item.description ? (
                  <p className='text-muted-foreground mt-2'>
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
