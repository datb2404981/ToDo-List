import { useRef, useState } from "react";
import { updateUserAvatarAPI, uploadFileAPI } from "../../services/api.service";
import { Drawer, Row, Col, Upload, Button, message, notification } from "antd";
import { SaveOutlined, UploadOutlined } from "@ant-design/icons";

const DescriptionItem = ({ title, content }) => (
  <div style={{ marginBottom: "12px" }}>
    <p style={{ marginBottom: 0, fontWeight: 600 }}>{title}:</p>
    <div>{content}</div> {/* ✅ tránh lỗi DOM nesting */}
  </div>
);

const ViewUserDetail = ({ user, open, onClose, loadUser }) => {
  const [loading, setLoading] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  if (!user) return null;

  const Avatar = `${import.meta.env.VITE_BACKEND_URL}/images/avatar/${
    user?.avatar
  }`;

  const handleSelectClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileList([file]); // ✅ luôn là array
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      //1 upload file
      const resUpload = await uploadFileAPI(fileList[0], "avatar"); // ✅ truyền file đúng
      const newAvatar = resUpload.data.fileUploaded;
      // 2.update user
      console.log("🚀 ~ handleSave ~ user:", user)
      await updateUserAvatarAPI(user._id, user.fullName, user.phone, newAvatar);
      onClose();
      loadUser();
      notification.success({
        message: "Upload Avatar",
        description: "Cập nhật avatar thành công",
        placement: "topRight",
      });
    } catch (err) {
      console.error("❌ Lỗi upload:", err);
      message.error("Upload thất bại, thử lại!");
    } finally {
      setLoading(false);
    }
  };

  const uploadProps = {
    fileList,
    onChange: ({ fileList: newList }) => setFileList(newList),
    customRequest: handleSave,
    beforeUpload: () => false,
    accept: "image/*",
    showUploadList: false,
  };

  return (
    <Drawer title="Chi tiết User" width={520} onClose={onClose} open={open}>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <DescriptionItem title="Full Name" content={user?.fullName} />
        </Col>
        <Col span={24}>
          <DescriptionItem title="Email" content={user?.email} />
        </Col>
        <Col span={24}>
          <DescriptionItem title="Phone" content={user?.phone} />
        </Col>

        <Col span={24}>
          <DescriptionItem
            title="Avatar"
            content={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  gap: "25px",
                  marginTop: "10px",
                  flexWrap: "wrap",
                }}
              >
                {/* Avatar hiện tại */}
                <div
                  style={{
                    textAlign: "center",
                    background: "#fafafa",
                    padding: "12px 16px",
                    borderRadius: "10px",
                    boxShadow: "0 0 6px rgba(0,0,0,0.05)",
                  }}
                >
                  <p
                    style={{
                      marginBottom: 10,
                      fontWeight: 600,
                      color: "#444",
                      fontSize: "15px",
                    }}
                  >
                    Avatar hiện tại
                  </p>
                  <img
                    src={Avatar}
                    alt="avatar hiện tại"
                    width={110}
                    height={110}
                    style={{
                      borderRadius: "10px",
                      border: "1px solid #ddd",
                      objectFit: "cover",
                      backgroundColor: "#fff",
                    }}
                  />
                  <div style={{ marginTop: "12px" }}>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                    />
                    <Button
                      icon={<UploadOutlined />}
                      onClick={handleSelectClick}
                    >
                      Chọn ảnh mới
                    </Button>
                  </div>
                </div>

                {/* Ảnh vừa chọn */}
                {preview && (
                  <div
                    style={{
                      textAlign: "center",
                      background: "#fafafa",
                      padding: "12px 16px",
                      borderRadius: "10px",
                      boxShadow: "0 0 6px rgba(0,0,0,0.05)",
                    }}
                  >
                    <p
                      style={{
                        marginBottom: 10,
                        fontWeight: 600,
                        color: "#444",
                        fontSize: "15px",
                      }}
                    >
                      Ảnh vừa chọn
                    </p>
                    <img
                      src={preview}
                      alt="avatar mới"
                      width={110}
                      height={110}
                      style={{
                        borderRadius: "10px",
                        border: "1px dashed #aaa",
                        objectFit: "cover",
                        backgroundColor: "#fff",
                      }}
                    />
                    <div style={{ marginTop: "12px" }}>
                      <Upload {...uploadProps} openFileDialogOnClick={false}>
                        <Button
                          type="primary"
                          icon={<SaveOutlined />}
                          loading={loading}
                          onClick={handleSave}
                        >
                          Lưu ảnh
                        </Button>
                      </Upload>
                    </div>
                  </div>
                )}
              </div>
            }
          />
        </Col>
      </Row>
    </Drawer>
  );
};

export default ViewUserDetail;
