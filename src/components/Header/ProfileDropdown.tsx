import { Dropdown, DropdownButton } from "react-bootstrap";

// ProfileDropdown 컴포넌트는 사용자 프로필 정보를 표시하는 드롭다운입니다.
// 이 컴포넌트는 프로필 사진과 사용자 이름을 포함합니다.
const ProfileDropdown = () => {
    return (
        <DropdownButton id="dropdown-basic-button" title="Profile">
            <Dropdown.Item href="#action-1">Dropdown Test</Dropdown.Item>
            <Dropdown.Item href="#action-2">Dropdown Test</Dropdown.Item>
            <Dropdown.Item href="#action-3">Dropdown Test</Dropdown.Item>
        </DropdownButton>
    );
}
export default ProfileDropdown;