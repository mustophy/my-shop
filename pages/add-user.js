import { FilledButton } from "@/components/ui/Button"
import IconInput from "@/components/ui/IconInput"


const addUser = () => {
  return (
    <div>
        <h2 className="text-black mb-[10px] w-[100%] p-[25px] bg-[#FBF9F7]">Basic Information</h2>
        <div className="flex gap-4 items-center p-[25px] pt-[20px]">
            <img className="h-[50px]" src="assets/add-user/profile.svg" alt='img' />
            <div>
                <p className="font-bold text-black text-[14px]">Profile Photo</p>
                <p className="text-[13px]">This will be displayed on your profile</p>
            </div>
        </div>
        <div className="flex flex-wrap justify-between w-full gap-[15px] px-[25px]">
            <IconInput placeholder='March David'label='Name' img='/assets/add-user/name.svg' />
            <IconInput placeholder='David123@gmail.com'label='Email Address' img='/assets/add-user/email.svg' />
            <IconInput placeholder='+4945296642182'label='Phone No' img='/assets/add-user/phone.svg' />
            <IconInput placeholder='Male'label='Gender' img='/assets/add-user/gender.svg' />
            <IconInput placeholder='9/11/1985'label='Date of Birth' img='/assets/add-user/date.svg' />
            <IconInput placeholder='10117'label='Zip Code' img='/assets/add-user/zip.svg' />
            <IconInput placeholder='Account'label='Department' img='/assets/add-user/depart.svg' />
            <IconInput placeholder='Berlin, Germany'label='Live' img='/assets/add-user/live.svg' />
            <IconInput placeholder='St#296, Germany'label='Street Address' img='/assets/add-user/address.svg' />
        </div>
        <div className="flex justify-end my-[25px] mr-[25px]">
            <FilledButton>Continue</FilledButton>
        </div>
    </div>
  )
}

export default addUser