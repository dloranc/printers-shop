import rules from "../../rbac-rules";
import { useAuth0 } from "../../react-auth0-spa.js";

const check = (rules, role, action, data) => {
  const permissions = rules[role];
  if (!permissions) {
    // role is not present in the rules
    return false;
  }

  const staticPermissions = permissions.static;

  if (staticPermissions && staticPermissions.includes(action)) {
    // static rule not provided for action
    return true;
  }

  const dynamicPermissions = permissions.dynamic;

  if (dynamicPermissions) {
    const permissionCondition = dynamicPermissions[action];
    if (!permissionCondition) {
      // dynamic rule not provided for action
      return false;
    }

    return permissionCondition(data);
  }

  return false;
};
// do something with role
const Can = props => {
  const { isAuthenticated, user } = useAuth0();
  let role = 'guest';

  if (isAuthenticated) {
    role = user['http://localhost:3000/roles'][0];
  }

  return check(rules, role, props.perform, props.data)
    ? props.yes()
    : props.no();
}

Can.defaultProps = {
  yes: () => null,
  no: () => null
};

export default Can;
