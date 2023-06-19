import { Modal } from "@douyinfe/semi-ui";

export default ({ onOk, okText, cancelText, title }) => {
  const modal = Modal.error({
    title,
    onOk: () => {
      modal.destroy();
      onOk();
    },
    onCancel: () => modal.destroy(),
    okText,
    cancelText,
  });
};
