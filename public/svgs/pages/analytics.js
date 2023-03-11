import CustomLineChart from "@/charts/CustomLineChart"
import { CustomPieChart } from "@/charts/PieChart"
import { SquareChart } from "@/components/SquareChart"
import { Card } from "@/components/ui/Cards"
import { IconCard } from "@/components/ui/IconCard"
const analytics = () => {
  return (
    <div className="rounded-lg flex flex-col sm:grid grid-cols-7 gap-[30px] pb-10">
      <div className="col-span-4">
        <div className="grid sm:grid-cols-2 gap-[30px]">
          <Card className="flex justify-between border-0">
            <div>
              <p className="text-2xl font-semibold text-white">Income</p>
              <p className="text-3xl text-primary font-bold mt-4">$23,000.00</p>
              <div className="flex mt-6 items-center">
                <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.6668 2.44453C10.1751 2.44453 9.77791 2.0473 9.77791 1.55564C9.77791 1.06397 10.1751 0.666748 10.6668 0.666748H15.1112C15.6029 0.666748 16.0001 1.06397 16.0001 1.55564V6.00008C16.0001 6.49175 15.6029 6.88897 15.1112 6.88897C14.6196 6.88897 14.2224 6.49175 14.2224 6.00008V3.70286L9.5168 8.40564C9.16958 8.75286 8.60569 8.75286 8.25846 8.40564L5.33346 5.48064L1.5168 9.29453C1.16957 9.64175 0.605686 9.64175 0.258464 9.29453C-0.0887587 8.9473 -0.0887587 8.38341 0.258464 8.03619L4.70291 3.59175C5.05013 3.24453 5.61402 3.24453 5.96124 3.59175L8.88902 6.51953L12.964 2.44453H10.6668Z" fill="#84838D" />
                </svg>
                <p className="ml-3 font-light">Per month in year 2022</p>
              </div>
            </div>
            <div className="relative h-full w-[100px]">
              <div className="absolute top-0 left-0 h-full w-[100px]">
                <CustomPieChart inner={40} outer={50} />
              </div>
              <div className="absolute top-0 left-0 h-full flex items-center justify-center w-[100px]">
                <CustomPieChart inner={27} outer={35} />
              </div>
              {/* <CustomPieChart inner={20} outer={30} /> */}
            </div>
          </Card>
          <Card className="flex justify-between border-0">
            <div>
              <p className="text-2xl font-semibold text-white">Current Balance</p>
              <p className="text-3xl text-primary font-bold mt-4">$10,050.00</p>
              <div className="flex mt-6 items-center">
                <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.6668 2.44453C10.1751 2.44453 9.77791 2.0473 9.77791 1.55564C9.77791 1.06397 10.1751 0.666748 10.6668 0.666748H15.1112C15.6029 0.666748 16.0001 1.06397 16.0001 1.55564V6.00008C16.0001 6.49175 15.6029 6.88897 15.1112 6.88897C14.6196 6.88897 14.2224 6.49175 14.2224 6.00008V3.70286L9.5168 8.40564C9.16958 8.75286 8.60569 8.75286 8.25846 8.40564L5.33346 5.48064L1.5168 9.29453C1.16957 9.64175 0.605686 9.64175 0.258464 9.29453C-0.0887587 8.9473 -0.0887587 8.38341 0.258464 8.03619L4.70291 3.59175C5.05013 3.24453 5.61402 3.24453 5.96124 3.59175L8.88902 6.51953L12.964 2.44453H10.6668Z" fill="#84838D" />
                </svg>
                <p className="ml-3 font-light">Per month in year 2022</p>
              </div>
            </div>
          </Card>
        </div>

      </div>
      <div className="col-span-3 grid sm:grid-cols-2 gap-x-[10px] gap-y-[30px]">
        <Card className="hidden sm:block border-0 px-[10px] py-[10px]">
          <SquareChart />
          {/* <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.25 3.375H6.75L5.08359 0.875391C4.83398 0.499219 5.10117 0 5.55117 0H12.4488C12.8988 0 13.166 0.499219 12.9164 0.875391L11.25 3.375ZM6.75 4.5H11.25C11.3836 4.58789 11.5348 4.68633 11.707 4.79531C13.7004 6.07148 18 8.8207 18 14.625C18 16.4883 16.4883 18 14.625 18H3.375C1.51172 18 0 16.4883 0 14.625C0 8.8207 4.29961 6.07148 6.29297 4.79531C6.46172 4.68633 6.61641 4.58789 6.75 4.5ZM9.70664 7.875C9.70664 7.48477 9.39023 7.16836 9 7.16836C8.60977 7.16836 8.29336 7.48477 8.29336 7.875V8.08594C8.09648 8.12813 7.91016 8.18789 7.73438 8.26523C7.20703 8.5043 6.75352 8.94727 6.64102 9.59062C6.57773 9.94922 6.61289 10.2937 6.76055 10.6102C6.9082 10.9195 7.13672 11.1375 7.36875 11.2957C7.77656 11.5734 8.31445 11.7352 8.72578 11.8582L8.80312 11.8828C9.2918 12.0305 9.62578 12.143 9.8332 12.2941C9.92109 12.3574 9.95273 12.4066 9.9668 12.4383C9.97734 12.4664 9.99844 12.5297 9.97383 12.6738C9.95273 12.7969 9.88594 12.8988 9.69258 12.9832C9.47813 13.0746 9.13008 13.1203 8.68008 13.05C8.46914 13.0148 8.09297 12.8883 7.75898 12.7723C7.68164 12.7441 7.60781 12.7195 7.5375 12.6984C7.16836 12.5754 6.77109 12.7758 6.64805 13.1449C6.525 13.5141 6.72539 13.9113 7.09453 14.0344C7.13672 14.0484 7.18945 14.066 7.24922 14.0871C7.52695 14.182 7.96289 14.3297 8.29688 14.407V14.625C8.29688 15.0152 8.61328 15.3316 9.00352 15.3316C9.39375 15.3316 9.71016 15.0152 9.71016 14.625V14.4316C9.9 14.3965 10.0793 14.3438 10.2516 14.2699C10.8035 14.0344 11.25 13.5773 11.3625 12.9094C11.4258 12.5438 11.3977 12.1957 11.257 11.8758C11.1199 11.5594 10.8984 11.3273 10.6629 11.1551C10.234 10.8457 9.66797 10.6734 9.24258 10.5434L9.21445 10.5363C8.71523 10.3852 8.37773 10.2797 8.16328 10.1355C8.07187 10.0723 8.04375 10.0301 8.03672 10.0125C8.02969 10.002 8.01211 9.95625 8.0332 9.83672C8.04375 9.76992 8.1 9.65391 8.32148 9.55195C8.54648 9.45 8.89805 9.39375 9.32695 9.46055C9.47812 9.48516 9.95625 9.57656 10.0898 9.61172C10.466 9.71016 10.8492 9.48867 10.9512 9.1125C11.0531 8.73633 10.8281 8.35312 10.452 8.25117C10.2973 8.20898 9.9457 8.13867 9.71367 8.09648V7.875H9.70664Z" fill="#9874B1" />
          </svg>
          <h2 className="my-[10px]">250</h2>
          <p>Transaction</p> */}
        </Card>
        <Card className="hidden sm:block border-0"></Card>
      </div>
      <Card className="col-span-4 border-0">
        <div className="flex mb-8">
          <h2 className="text-primary">Transaction</h2>
        </div>
        <div className="h-[300px] w-full">
          <CustomLineChart />
        </div>
      </Card>
      <Card className="border-0 sm:col-span-3">
        <div className="flex justify-between items-center mb-7">
          <h2 className="text-white text-xl">Remainder</h2>
          <p className="text-primary cursor-pointer">View All</p>
        </div>
        <div className="flex flex-col gap-y-5">
          {[0, 1, 2].map(trx => (
            <div className="rounded-lg border-primary border-l-4 py-3 px-5 shadow-shadow2">
              <h2 className="text-lg mb-4 cursor-pointer">Make bank transfer to Nigeria</h2>
              <div className="flex items-center">
                <img src="/assets/clock.svg" alt="" />
                <span className="ml-[10px]">12:300 PM</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
      <Card className="col-span-4 border-0 py-5 px-5">
        <div className="flex justify-between mb-5">
          <h2 className="text-primary">History</h2>
          <div className="flex items-center">
            <p className="mr-[10px]">Sort by</p>
            <img src="/assets/down-arrow.svg" alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-y-5">
          {[0, 1, 2].map(entry => (
            <div className="flex sm:grid grid-cols-2 gap-x-20">
              <div className="flex justify-between items-center">
                <IconCard>
                  <img src="/assets/card.svg" alt="" />
                </IconCard>
                <span className="ml-4 font-semibold">Online payment</span>
                <span className="hidden sm:block ml-auto font-light">Completed</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="hidden font-light">$140</span>
                <span className="hidden sm:block font-light">+15.65%</span>
                <span className="font-light">15/20/2022</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
      <Card className="py-5 border-0 px-5 col-span-3 bg-surface-background">
        <h2 className="mb-[17px]">Statistics</h2>
        <div className="bg-surface-gray flex justify-between rounded-lg py-3 px-4 mb-5">
          <div>
            <h2 className="mb-[10px] text-lg">Weekly Target</h2>
            <span>25% achieved</span>
          </div>
          <div className=" w-16">
            <CustomPieChart inner={18} outer={23} />
          </div>
        </div>
        <div className="bg-surface-gray flex justify-between rounded-lg py-3 px-4 mb-5">
          <div>
            <h2 className="mb-[10px] text-lg">Weekly Target</h2>
            <span>25% achieved</span>
          </div>
          <div className=" w-16">
            <CustomPieChart inner={18} outer={23} />
          </div>
        </div>

      </Card>

    </div>
  )
}

export default analytics
