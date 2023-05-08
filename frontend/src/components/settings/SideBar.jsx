import {
  ProfileIcon,
  CustomizationIcon,
  NotificationsIcon,
  AccountIcon,
  BillingIcon,
  OrganizationIcon,
  ExtensionsIcon,
} from "../icons";

const SideBar = () => {
  return (
    <nav>
      <ul className="w-60">
        <li className="flex cursor-pointer items-center space-x-2 rounded bg-white p-2">
          <ProfileIcon />
          <span className="text-sm font-black">Profile</span>
        </li>
        <li className="flex cursor-pointer items-center space-x-2 rounded p-2">
          <CustomizationIcon />
          <span className="text-sm">Customization</span>
        </li>
        {/* <li className="flex cursor-pointer items-center space-x-2 rounded p-2">
          <NotificationsIcon />
          <span className="text-sm">Notifications</span>
        </li>
        <li className="flex cursor-pointer items-center space-x-2 rounded p-2">
          <AccountIcon />
          <span className="text-sm">Account</span>
        </li>
        <li className="flex cursor-pointer items-center space-x-2 rounded p-2">
          <BillingIcon />
          <span className="text-sm">Billing</span>
        </li>
        <li className="flex cursor-pointer items-center space-x-2 rounded p-2">
          <OrganizationIcon />
          <span className="text-sm">Organization</span>
        </li>
        <li className="flex cursor-pointer items-center space-x-2 rounded p-2">
          <ExtensionsIcon />
          <span className="text-sm">Extensions</span>
        </li> */}
      </ul>
    </nav>
  );
};

export default SideBar;
