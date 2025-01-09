import { Input, Button, Form } from "antd";
import { EditPasswordFormValues } from "../index.types";

const EditPassword: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: EditPasswordFormValues) => {
    console.log("Form values:", values);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      className="space-y-3"
    >
      <Form.Item
        label={
          <span className="font-semibold text-gray-700">Current Password</span>
        }
        name="currentPassword"
        rules={[
          { required: true, message: "Please enter your current password!" },
        ]}
      >
        <Input.Password placeholder="Enter your current password" />
      </Form.Item>

      <Form.Item
        label={
          <span className="font-semibold text-gray-700">New Password</span>
        }
        name="newPassword"
        rules={[{ required: true, message: "Please enter your new password!" }]}
      >
        <Input.Password placeholder="Enter your new password" />
      </Form.Item>

      <Form.Item
        label={
          <span className="font-semibold text-gray-700">Confirm Password</span>
        }
        name="confirmPassword"
        rules={[
          { required: true, message: "Please confirm your new password!" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("newPassword") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The two passwords do not match!"),
              );
            },
          }),
        ]}
      >
        <Input.Password placeholder="Confirm your new password" />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="w-full border-none bg-orange-500 hover:bg-orange-600"
        >
          Update Password
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditPassword;
