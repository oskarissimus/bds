interface NotifyOnErrorInterface {
  connection: {
    sendNotification: (type: string, message: string) => void;
  };
}
export function NotifyOnError(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (this: NotifyOnErrorInterface, ...args: any[]) {
    try {
      return originalMethod.apply(this, args);
    } catch (error: any) {
      this.connection.sendNotification(
        "custom/showErrorMessage",
        error.message
      );
      throw error;
    }
  };

  return descriptor;
}
