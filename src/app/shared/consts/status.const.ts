export const CREATED = 'Creado';
export const UPDATED = 'Actualizado';
export const DELETED = 'Eliminado';

export const messageBuilder = (moduleName: string, action: string) => {
    return `El ${moduleName} se ha ${action} exitosamente`;
}
