import { DropdownButton } from "react-bootstrap";

// ProfileDropdown 컴포넌트는 사용자 프로필 정보를 표시하는 드롭다운입니다.
// 이 컴포넌트는 프로필 사진과 사용자 이름을 포함합니다.
const ProfileDropdown = () => {
    return (
        <DropdownButton id="profile-dropdown" title="Profile">
            <div>
                <img src="profile-pic.jpg" alt="Profile Picture" />
                <h2>John Doe</h2>
            </div>
        </DropdownButton>
    );
}
export default ProfileDropdown;